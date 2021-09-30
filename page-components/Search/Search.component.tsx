import style from './Search.component.module.css';
import React from 'react';
import Button from '../../q-components/Button/Button';
import H from '../../q-components/H/H';
import { SearchComponentProps } from './Search.component.props';
import Card from '../../q-components/Card/Card';
import Tags from '../../q-components/Tag/Tag';
import SearchIcon from './Search.svg';
import { useRouter } from 'next/router';
import Paragraph from '../../q-components/Paragraph/Paragraph';
import { declOfNumber } from '../../helpers/helpers';

const SearchComponent = ({ product, query }: SearchComponentProps) => {

    const router = useRouter();

    return (<>
        <div className={style.searchTitle}>
            <div className={style.ico}>
                <SearchIcon />
            </div>
            <H h="h1">Поиск</H>
        </div>
        <Paragraph>По запросу {query} найдено {product.length} {declOfNumber(product.length, ['страница', 'страницы', 'страниц'])}</Paragraph>
        {
            product.map(el =>
                <Card key={el._id} color="white">
                    <div className={style.itemsProduct}>
                        {el.title}
                        <Tags color="ghost">{el.secondCategory}</Tags>
                        <Button onClick={() => router.push(`http://localhost:3000/courses/${el.alias}`)} className={style.go} appearance="primary">Перейти</Button>
                    </div>
                </Card>)
        }
    </>)
}

export default SearchComponent;