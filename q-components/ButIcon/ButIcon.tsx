import React from "react";
import { ButIconProps, icons, TypeIcon } from './ButIcon.props';
import style from './ButIcon.module.css';
import cn from 'classnames';

const ButIcon = ({ color, icon, className, ...props }: ButIconProps): JSX.Element => {

    const Icon = icons[icon];
    return (<button className={cn(style.butIcon, className, {
        [style.primary]: color == 'primary',
        [style.white]: color == 'white'
    })}
        {...props}>
        <Icon />
    </button >)
}

export default ButIcon;