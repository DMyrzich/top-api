import React from 'react';
import cn from 'classnames';
import style from './Tag.module.css';
import { TagsProps } from './Tag.props';

const Tags = ({ children, className, size = "m", color = 'ghost', ...props }: TagsProps): JSX.Element => {

    return <div className={cn(style.tag, className, {

        [style.m]: size == 'm',
        [style.s]: size == 's',
        [style.red]: color == 'red',
        [style.green]: color == 'green',
        [style.grey]: color == 'grey',
        [style.primary]: color == 'primary',
        [style.ghost]: color == 'ghost',

    })}
        {...props}>
        {children}

    </div >
}

export default Tags;