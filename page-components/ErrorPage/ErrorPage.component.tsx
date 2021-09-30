import style from './ErrorPage.component.module.css';
import React from 'react';
import Button from '../../q-components/Button/Button';
import H from '../../q-components/H/H';
import { useRouter } from 'next/router';
import { ErrorComponentProps } from './ErrorPage.component.props';


const ErrorPageComponent = ({ title, description }: ErrorComponentProps) => {

    const router = useRouter();

    return (<div className={style.errorWrapper}>
        <H h="h3">{title}</H>
        {description}
        <div className={style.errorText}>
            <Button onClick={() => router.push("http://localhost:3000/")} appearance="primary">На главную</Button>
            <Button onClick={() => router.back()} appearance="primary">Вернуться назад</Button>
        </div>
    </div>)
}

export default ErrorPageComponent;