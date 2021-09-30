import React, { useEffect, useState, KeyboardEvent } from 'react';
import cn from 'classnames';
import style from './Reviews.module.css';
import { ReviewsProps } from './Reviews.props';
import Rating from '../Rating/Rating';
import User from './User.svg';
import Divider from '../Divider/Divider';
import { format } from 'date-fns';
import { ru } from 'date-fns/locale';

const Reviews = ({ review, className, ...props }: ReviewsProps): JSX.Element => {

    const { _id, name, rating, description, title, createdAt } = review;

    return (<div key={_id} className={cn(style.watchReview, className)} {...props}>
        <User />
        <div className={style.name}>
            <span>{name}:</span>
            <span className={style.title}>{title}</span>
        </div>
        <div className={style.createdAt}>{format(new Date(createdAt), 'dd MMMM yyyy', { locale: ru })}</div>
        <Rating className={style.rating} rating={rating ?? rating} />
        <div className={style.description}>{description}</div>
        <Divider className={style.hr} />
    </div >)
}

export default Reviews;