import React from 'react';
import { ParagraphProps } from './Paragraph.props';
import cn from 'classnames';
import style from './Paragraph.module.css';

const Paragraph = ({ children, className, size = 'm', ...props }: ParagraphProps): JSX.Element => {

    return <p className={cn(style.p, className, {

        [style.m]: size == 'm',
        [style.s]: size == 's',
        [style.l]: size == 'l',

    })}
        {...props}>
        {children}
    </p>
}

export default Paragraph;