import React, { ForwardedRef, forwardRef } from 'react';
import cn from 'classnames';
import style from './Input.module.css';
import { InputProps } from './Input.props';

const Input = forwardRef(({ className, error, ...props }: InputProps, ref: ForwardedRef<HTMLInputElement>): JSX.Element => {

    return <div className={cn(style.inputWrapper, className)}>
        <input ref={ref} className={cn(style.input, {
            [style.error]: error
        })} type="text" {...props} />
        {error && <span role="alert" className={style.errorMessage}>{error.message}</span>}
    </div>
})

export default Input;