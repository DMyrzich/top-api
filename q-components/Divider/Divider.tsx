import React from 'react';
import { DividerProps } from './Divider.props';
import cn from 'classnames';
import style from './Divider.module.css';

const Divider = ({ className, ...props }: DividerProps): JSX.Element => {

    return <hr className={cn(style.hr, className)} {...props} />
}

export default Divider;