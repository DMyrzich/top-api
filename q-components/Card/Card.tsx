import React from 'react';
import { CardProps } from './Card.props';
import style from './Card.module.css';
import cn from 'classnames';
import { ForwardedRef, forwardRef } from 'react';

const Card = forwardRef(({ color = 'white', children, className, ...props }: CardProps, ref: ForwardedRef<HTMLDivElement>): JSX.Element => {

    return <div ref={ref} className={cn(style.card, className, {
        [style.blue]: color == 'blue',
    })} {...props}>
        {children}
    </div>
})

export default Card;