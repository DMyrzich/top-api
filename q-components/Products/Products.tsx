import React, { useState, useRef, KeyboardEvent } from 'react';
import { ProductsProps } from './Products.props';
import style from './Products.module.css';
import Card from '../Card/Card';
import Rating from '../Rating/Rating';
import Tags from '../Tag/Tag';
import Button from '../Button/Button';
import Divider from '../Divider/Divider';
import { declOfNumber, format } from '../../helpers/helpers';
import Image from 'next/image';
import Reviews from '../Reviews/Reviews';
import ReviewForm from '../ReviewForm/ReviewForm';
import { motion } from 'framer-motion';
import { forwardRef, ForwardedRef } from 'react';

const Products = motion(forwardRef(({ product, className, ...props }: ProductsProps, ref: ForwardedRef<HTMLDivElement>): JSX.Element => {

    const [isOpenReviewer, setIsOpenReviewer] = useState<boolean>(false);

    const refReview = useRef<HTMLDivElement>(null);

    const scrollToReview = () => {
        setIsOpenReviewer(true);
        refReview.current?.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        })
    }

    const keyScrollDown = (key: KeyboardEvent) => {
        if (key.code == 'Enter' || key.code == 'Space') {
            key.preventDefault();
            refReview.current?.focus();
            scrollToReview();
        }
    }

    const variants = {

        visible: {
            opacity: 1,
            height: 'auto',
            overflow: 'show'
        },
        hidden: {
            opacity: 0,
            height: 0,
            overflow: 'hidden'
        }
    }

    return <div className={className} ref={ref} {...props}>
        <Card className={style.product} color="white" tabIndex={0}>
            <div className={style.logo}>
                <Image width={70} height={70} src={process.env.NEXT_PUBLIC_DOMAIN + product.image} alt={product.description} />
            </div>
            <div className={style.title}>{product.title}</div>
            <div className={style.price}>{format(product.price)} P
                {
                    product.oldPrice && <Tags className={style.oldPrice} color="green">{format(product.price - product.oldPrice)} P</Tags>
                }
            </div>
            <div className={style.credit}>
                {format(product.credit)}
                <span className={style.month}>р/мес</span>
            </div>
            <div className={style.rating}><Rating rating={product.reviewAvg ?? product.initialRating} /></div>
            <div className={style.tags}>{product.categories.map((t) => <Tags key={t} size="s" color="ghost">{t}</Tags>)}</div>
            <div className={style.priceTitle}>цена</div>
            <div className={style.creditTitle}>кредит</div>
            <div className={style.reviewCount}>
                <a
                    href="#review"
                    onKeyDown={(key: KeyboardEvent) => keyScrollDown(key)}
                    onClick={scrollToReview}>{product.reviewCount}
                    {declOfNumber(product.reviewCount, ['отзыв', 'отзыва', 'отзывов'])}
                </a>
            </div>
            <Divider className={style.hr} />
            <div className={style.description}>{product.description}</div>
            <div className={style.feature}>
                {product.characteristics.map(el => {
                    return (<div key={el.name} className={style.characteristics}>
                        <span className={style.characteristicsName}>{el.name}</span>
                        <span className={style.characteristicsDoth}></span>
                        <span className={style.characteristicsValue}>{el.value}</span>
                    </div>)
                })}
            </div>
            <div className={style.advBlock}>
                {product.advantages && <div className={style.advantages}>
                    <div className={style.advantagesTitle}>Преимущества </div>
                    <div>{product.advantages}</div>
                </div>}
                {product.disadvantages && <div className={style.disadvantages}>
                    <div className={style.advantagesTitle}>Недостатки </div>
                    <div>{product.disadvantages}</div>
                </div>}
            </div>
            <Divider className={style.hr2} />
            <div className={style.actions}>
                <Button appearance="primary">Узнать подробнее</Button>
                <Button
                    appearance="ghost"
                    arrow={isOpenReviewer ? "down" : "right"}
                    aria-expanded={isOpenReviewer}
                    onClick={() => setIsOpenReviewer(!isOpenReviewer)}>Читать отзывы
                </Button>
            </div>
        </Card >
        <motion.div
            variants={variants}
            animate={isOpenReviewer ? 'visible' : 'hidden'}
            initial={'hidden'}>
            <Card
                color="blue"
                ref={refReview}
                tabIndex={isOpenReviewer ? 0 : -1}
                className={style.reviews}>
                {product && product.reviews.map(r => <Reviews key={r._id} review={r} />)}
                <ReviewForm id={product._id} isTable={isOpenReviewer ? 0 : -1} />
            </Card>
        </motion.div>
    </div >
}))

export default Products;