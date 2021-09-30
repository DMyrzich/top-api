import React, { useState } from 'react';
import cn from 'classnames';
import style from './ReviewForm.module.css';
import { ReviewFormProps } from './ReviewForm.props';
import Input from '../Input/Input';
import Textarea from '../Textarea/Textarea';
import Rating from '../Rating/Rating';
import Button from '../Button/Button';
import CloseIcon from './close.svg';
import { useForm, Controller } from 'react-hook-form';
import { IReviewForm, ReviewResponse } from './ReviewForm.interface';
import { Api } from '../../helpers/Api';

const ReviewForm = ({ id, isTable, className, ...props }: ReviewFormProps): JSX.Element => {

    const { register, control, handleSubmit, formState: { errors }, reset, clearErrors } = useForm<IReviewForm>();
    const [isSend, setSend] = useState<boolean>(false);
    const [isError, setError] = useState<boolean>(false);

    const onSubmit = async (data: IReviewForm) => {

        try {

            const resp = await fetch(Api.review.create, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ ...data, productId: id }),
            });
            const response = await resp.json() as ReviewResponse;
            if (response.message) {
                setSend(true);
                reset();
            }
            else {
                setError(true);
            }
        }
        catch {
            setError(true);
        }
    }

    return (<form onSubmit={handleSubmit(onSubmit)}>
        <div className={cn(style.addReview, className)} {...props}>
            <Input
                {...register('name', { required: { value: true, message: 'Заполните ваше имя.' } })}
                className={style.avtName}
                placeholder="Имя"
                error={errors.name}
                tabIndex={isTable}
                aria-invalid={errors.name ? true : false}
            />
            <Input
                {...register('title', { required: { value: true, message: 'Заполните заголовок отзыва.' } })}
                className={style.avtTitle}
                placeholder="Заголовок отзыва"
                error={errors.title}
                tabIndex={isTable}
                aria-invalid={errors.title ? true : false}
            />
            <Textarea
                {...register('description', { required: { value: true, message: 'Заполните текст отзыва.' } })}
                className={style.avtText}
                placeholder="Текст отзыва"
                error={errors.description}
                tabIndex={isTable}
                aria-label="Текст отзыва"
                aria-invalid={errors.description ? true : false}
            />
            <div className={style.mark}>
                <span>Оценка:</span>
                <Controller
                    control={control}
                    rules={{ required: { value: true, message: 'Выберите рейтинг отзыва.' } }}
                    name='rating'
                    render={({ field, formState: { errors } }) => <Rating isEditable={true} tabIndex={isTable} error={errors.rating} ref={field.ref} rating={field.value} setRating={field.onChange} />}
                />
            </div>
            <Button tabIndex={isTable} className={style.submit} appearance={'primary'} onClick={() => clearErrors()}>Отправить</Button>
            <div className={style.moderation}>* Перед публикацией отзыв пройдет предварительную модерацию и проверку</div>
            {(isSend) && <div role="alert" className={style.success}>
                <div className={style.successTitle}>Спасибо, ваш отзыв отправлен.</div>
                <div className={style.successDescription}>Отзыв будет доступен после проверки модератором.</div>
                <button className={style.close} onClick={() => setSend(false)}>
                    <CloseIcon />
                </button>
            </div>}
            {(isError) && <div role="alert" className={style.success}>
                <div className={style.successTitle}>Что-то пошло не так.</div>
                <div className={style.successDescription}>Попробуйте обновить страницу и отправить отзыв заново.</div>
                <button className={style.close} onClick={() => setSend(false)}>
                    <CloseIcon />
                </button>

            </div>}
        </div>
    </form>);
}

export default ReviewForm;