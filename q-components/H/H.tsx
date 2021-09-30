import React from 'react';
import { HProps } from './H.props';
import style from './H.module.css';

const H = ({ h, children }: HProps): JSX.Element => {

    switch (h) {
        case 'h1': return <h1 className={style.h1}>{children}</h1>
        case 'h2': return <h2 className={style.h2}>{children}</h2>
        case 'h3': return <h3 className={style.h3}>{children}</h3>
        default: return <></>
    }
}

export default H;