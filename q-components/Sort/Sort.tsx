import React, { useReducer, KeyboardEvent } from 'react';
import cn from 'classnames';
import style from './Sort.module.css';
import { SortProps, sortEnum } from './Sort.props';
import SortIcon from './Sort.svg';

const Sort = ({ sort, setSort, className, ...props }: SortProps): JSX.Element => {

    return <div className={cn(style.sort_rate, className)}{...props}>
        <div id="sort" className={style.sortName}>сортировка</div>
        <button
            id="rate"
            tabIndex={0}
            aria-selected={sort == sortEnum.Rate}
            aria-labelledby="sort rate"
            className={cn({
                [style.active]: sort == sortEnum.Rate
            })}
            onClick={() => setSort(sortEnum.Rate)}>
            <SortIcon className={style.sort_icon} />
            По рейтингу
        </button>
        <button
            id="price"
            tabIndex={0}
            aria-labelledby="sort price"
            aria-selected={sort == sortEnum.Price}
            className={cn({
                [style.active]: sort == sortEnum.Price
            })}
            onClick={() => setSort(sortEnum.Price)}>
            <SortIcon className={style.sort_icon} />
            По цене
        </button>
    </div >
}

export default Sort;