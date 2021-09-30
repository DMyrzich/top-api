import React, { ForwardedRef, forwardRef } from 'react';
import cn from 'classnames';
import style from './Textarea.module.css';
import { TextAreaProps } from './Textarea.props'

const Textarea = forwardRef(({ className, error, ...props }: TextAreaProps, ref: ForwardedRef<HTMLTextAreaElement>): JSX.Element => {

    return <div className={cn(style.textareaWrapper, className)}>
        <textarea ref={ref} className={cn(style.textarea, {
            [style.error]: error
        })} {...props} />
        {error && <span role="alert" className={style.errorMessage}>{error.message}</span>}
    </div>
})

export default Textarea;