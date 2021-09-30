import type { GetStaticPaths, GetStaticProps, GetStaticPropsContext } from 'next'
import withLayout from '../../layout/Layout';
import { MenuItem } from '../../interface/menu.interface';
import { TopPageModel, TopLevelCategory } from '../../interface/top-page.interface';
import { ParsedUrlQuery } from "node:querystring";
import { ProductModel } from '../../interface/product.interface';
import { firstLevelMenu } from '../../helpers/helpers';
import TopPageComponent from '../../page-components/TopPageComponent/TopPage.component';
import { Api } from '../../helpers/Api';
import Head from 'next/head';

function TopPage({ page, product, ...props }: TopPageProps): JSX.Element {

    return <>
        {page && product && <Head>
            <title>{page.metaTitle}</title>
            <meta name="description" content={page.metaDescription} />
            <meta property="og:title" content={page.metaTitle} />
            <meta property="og:description" content={page.metaDescription} />
            <meta property="og:type" content="article" />
        </Head>}
        <TopPageComponent product={product} page={page} {...props} />
    </>
}

export default withLayout(TopPage)

export const getStaticPaths: GetStaticPaths = async () => {

    let paths: string[] = [];
    for (const page of firstLevelMenu) {

        const resMenu = await fetch(Api.topPage.find, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ firstCategory: page.id }),
        });
        const menu: MenuItem[] = await resMenu.json();
        paths = paths.concat(menu.flatMap((m) => m.pages.map(p => `/${page.route}/${p.alias}`)))
    }
    return {
        paths,
        fallback: false
    }
}

export const getStaticProps: GetStaticProps<TopPageProps> = async ({ params }: GetStaticPropsContext<ParsedUrlQuery>) => {

    if (!params) {

        return {
            notFound: true
        }
    }
    const firstCategoryItem = firstLevelMenu.find(m => m.route == params.type);
    if (!firstCategoryItem) {

        return {
            notFound: true
        }
    }
    try {

        const resMenu = await fetch(Api.topPage.find, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ firstCategory: firstCategoryItem.id }),
        });
        const menu: MenuItem[] = await resMenu.json();
        if (menu.length == 0) {
            return {
                notFound: true
            }
        }
        const resPage = await fetch(Api.topPage.byAlias + params.alias);
        const page: TopPageModel = await resPage.json();

        const resProduct = await fetch(Api.product.find, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ category: page.category, limit: 10 }),
        });
        const product: ProductModel[] = await resProduct.json();

        return { props: { menu, page, product, firstCategory: firstCategoryItem.id } }
    }
    catch {
        return {
            notFound: true
        }
    }
}

export interface TopPageProps extends Record<string, unknown> {
    menu: MenuItem[];
    firstCategory: TopLevelCategory;
    page: TopPageModel;
    product: ProductModel[];
}