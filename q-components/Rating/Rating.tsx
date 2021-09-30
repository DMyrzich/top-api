import React, { useEffect, useRef, useState, KeyboardEvent, ForwardedRef, forwardRef } from 'react';
import cn from 'classnames';
import style from './Rating.module.css';
import { RatingProps } from './Rating.props';
import StarIcon from './star.svg';

const Rating = forwardRef(({ isEditable = false, error, rating, setRating, tabIndex, ...props }: RatingProps, ref: ForwardedRef<HTMLDivElement>): JSX.Element => {

    const [ratingArray, SetRatingArray] = useState<JSX.Element[]>(new Array(5).fill(<></>))
    const refRatting = useRef<(null | HTMLSpanElement)[]>([])

    const selectTab = (rating: number, i: number): number => {
        if (!isEditable) {
            return -1;
        }
        if (!rating && i == 0) {
            return tabIndex ?? 0;
        }
        if (rating == i + 1)
            return tabIndex ?? 0;

        return -1;
    }

    useEffect(() => constructRating(rating), [rating, tabIndex])

    const constructRating = (currentRating: number) => {
        const updateArray = ratingArray.map((r: JSX.Element, i: number) => {
            return (<span
                className={cn(style.star, {
                    [style.filled]: i < currentRating,
                    [style.editable]: isEditable
                })}
                onMouseEnter={() => changeRating(i + 1)}
                onClick={() => setNewRating(i + 1)}
                onMouseLeave={() => changeRating(rating)}
                tabIndex={selectTab(rating, i)}
                ref={ref => refRatting.current?.push(ref)}
                onKeyDown={handleKey}
                aria-valuenow={rating}
                aria-valuemin={1}
                aria-valuemax={5}
                aria-label={isEditable ? 'Укажите рейтинг отзыва' : `Рейтинг ${rating}`}
                role={isEditable ? 'slider' : ''}
            >
                <StarIcon />
            </span>);
        })
        SetRatingArray(updateArray);
    }

    const changeRating = (i: number) => {
        if (!isEditable) return
        constructRating(i)
    }

    const setNewRating = (i: number) => {
        if (!isEditable || !setRating) {
            return
        }
        setRating(i)
    }

    const handleKey = (e: KeyboardEvent) => {
        if (!isEditable || !setRating) {
            return;
        }
        if (e.code == 'ArrowRight' || e.code == 'ArrowUp') {
            if (!rating) {
                setRating(1);
            }
            else {
                e.preventDefault();
                setRating(rating < 5 ? rating + 1 : 5);
            }
            refRatting.current[rating]?.focus();
        }
        if (e.code == 'ArrowLeft' || e.code == 'ArrowDown') {
            e.preventDefault();
            setRating(rating > 1 ? rating - 1 : 1);
            refRatting.current[rating - 2]?.focus();
        }
    }

    return <div
        ref={ref}
        className={cn(style.rateWrapper, {
            [style.error]: error
        })} {...props}>
        {ratingArray.map((r, i) => <span key={i}>{r}</span>)}
        {error && <span role="alert" className={style.errorMessage}>{error.message}</span>}
    </div >
})

export default Rating;