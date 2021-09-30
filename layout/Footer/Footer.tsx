import React from 'react';
import cn from 'classnames';
import style from './Footer.module.css';
import { FooterProps } from './Footer.props';
import { format } from 'date-fns';

const Footer = ({ className, ...props }: FooterProps): JSX.Element => {
    return (<footer className={cn(style.footer, className)} {...props}>
        <div className={style.prava}>Easy-Top © 2020 - {format(new Date(), ("y"))} Все права защищены</div>
        <a href="#1">Пользовательское соглашение</a>
        <a href="#1">Политика конфиденциальности</a>
    </footer>)
}

export default Footer;