import React from 'react';
import cn from 'classnames';
import style from './Advantages.module.css';
import { AdvantagesProps } from './Advantages.props';
import H from '../H/H';
import AdvantagesIcon from './Advantages.svg';

const Advantages = ({ advantages }: AdvantagesProps): JSX.Element => {

    return (<>
        <H h="h2">Преимущества</H>
        {
            advantages.map(el => (
                <div key={el._id} className={style.wrapper}>
                    <AdvantagesIcon />
                    <div className={style.title}>{el && el.title}</div>
                    <hr></hr>
                    <div className={style.description}>{el.description}</div>
                </div>
            ))
        }
    </>)
}

export default Advantages;