import React from 'react';
import cn from 'classnames';
import style from './Hhdata.module.css';
import { HhDataProps } from './Hhdata.props';
import Card from '../Card/Card';
import StartIcon from './star.svg';
import { format } from '../../helpers/helpers';

const HhData = ({ count, juniorSalary, middleSalary, seniorSalary }: HhDataProps): JSX.Element => {

    return (<div className={style.hh}>
        <Card className={style.count} color="white">
            <div className={style.title}>Всего вакансий</div>
            <div className={style.countValue}>{format(count)}</div>
        </Card>
        <Card className={style.salary} color="white">
            <div>
                <div className={style.title}>Начальный</div>
                <div className={style.salaryValue}>{format(juniorSalary)} P</div>
                <div className={style.rate}>
                    <StartIcon className={style.filled} />
                    <StartIcon />
                    <StartIcon />
                </div>
            </div>
            <div>
                <div className={style.title}>Средний</div>
                <div className={style.salaryValue}>{format(middleSalary)} P</div>
                <div className={style.rate}>
                    <StartIcon className={style.filled} />
                    <StartIcon className={style.filled} />
                    <StartIcon />
                </div>
            </div>
            <div>
                <div className={style.title}>Профессионал</div>
                <div className={style.salaryValue}>{format(seniorSalary)} P</div>
                <div className={style.rate}>
                    <StartIcon className={style.filled} />
                    <StartIcon className={style.filled} />
                    <StartIcon className={style.filled} />
                </div>
            </div>
        </Card >
    </div >)
}

export default HhData;