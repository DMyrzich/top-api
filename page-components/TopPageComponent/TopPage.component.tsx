import { TopPageComponentProps } from './TopPage.component.props';
import style from './TopPage.component.module.css';
import H from '../../q-components/H/H';
import Tags from '../../q-components/Tag/Tag';
import HhData from '../../q-components/Hhdata/Hhdata';
import { TopLevelCategory } from '../../interface/top-page.interface';
import React, { useEffect, useReducer } from 'react';
import Advantages from '../../q-components/Advantages/Advantages';
import Skills from '../../q-components/Skills/Skills';
import Sort from '../../q-components/Sort/Sort';
import { sortEnum } from '../../q-components/Sort/Sort.props';
import { sortReducer } from '../../q-components/Sort/sort.reducer';
import Products from '../../q-components/Products/Products';


const TopPageComponent = ({ page, product, firstCategory }: TopPageComponentProps) => {

    const [{ product: sortProduct, sort }, dispatchSort] = useReducer(sortReducer, { product, sort: sortEnum.Rate });

    const setSort = (sort: sortEnum) => dispatchSort({ type: sort })

    useEffect(() => dispatchSort({ type: 'reset', product }), [product])

    return (<>
        <div className={style.title}>
            <H h="h1">{page && page.title}</H>
            {sortProduct && <Tags color="grey" aria-label={`в количестве ${sortProduct.length}`} size="m">{sortProduct.length}</Tags>}
            <Sort sort={sort} setSort={setSort} />
        </div>
        <div role="list">
            {sortProduct && sortProduct.map(p => (<Products role="listitem" layout key={p._id} product={p} />))}
        </div>
        <div className={style.hh_title}>
            <H h="h2">Вакансии - {page && page.category}</H>
            {page && page.hh && <Tags color="red" size="m">hh.ru</Tags>}
        </div>
        {
            firstCategory == TopLevelCategory.Courses && <HhData {...page.hh} />
        }
        {
            page && page.advantages.length > 0 && <Advantages advantages={page.advantages} />
        }
        {
            page && <div className={style.seoText} dangerouslySetInnerHTML={{ __html: page.seoText }} />
        }
        {
            page && <Skills tags={page.tags} tagsTitle={page.tagsTitle} />
        }
    </>)
}

export default TopPageComponent;