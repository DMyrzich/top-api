import { GetStaticPaths, GetStaticProps, GetStaticPropsContext } from "next";
import { firstLevelMenu } from "../../helpers/helpers";
import { MenuItem } from "../../interface/menu.interface";
import withLayout from "../../layout/Layout";
import { ParsedUrlQuery } from 'node:querystring';
import { Api } from "../../helpers/Api";


function Type({ firstCategory }: TypeProps): JSX.Element {

    return (
        <>
            Type: {firstCategory}
        </>
    )
}

export default withLayout(Type)

export const getStaticPaths: GetStaticPaths = async () => {

    return {
        paths: firstLevelMenu.map(p => '/' + p.route),
        fallback: true
    }
}

export const getStaticProps: GetStaticProps<TypeProps> = async ({ params }: GetStaticPropsContext<ParsedUrlQuery>) => {
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
    const response = await fetch(Api.topPage.find, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ firstCategory: firstCategoryItem.id }),
    });
    return { props: { menu: await response.json(), firstCategory: firstCategoryItem.id } }
}

export interface TypeProps extends Record<string, unknown> {
    menu: MenuItem[];
    firstCategory: number;
}