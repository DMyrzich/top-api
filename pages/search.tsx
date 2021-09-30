import type { GetServerSideProps, GetServerSidePropsContext } from 'next'
import withLayout from '../layout/Layout';
import { MenuItem } from '../interface/menu.interface';
import { Api } from '../helpers/Api';
import { ProductModel } from '../interface/product.interface';
import { ParsedUrlQuery } from 'node:querystring';
import { TopLevelCategory } from '../interface/top-page.interface';
import SearchComponent from '../page-components/Search/Search.component';
import Head from 'next/head';

function Search({ ...props }: SearchProps): JSX.Element {

  return (<>
    <Head>
      <title>Поиск по сайту</title>
      <meta name="description" content="Поиск по сайту" />
    </Head>
    <SearchComponent {...props} />
  </>)
}

export default withLayout(Search)

export const getServerSideProps: GetServerSideProps<SearchProps> = async (params: GetServerSidePropsContext<ParsedUrlQuery>) => {

  if (!params.query.q) {
    return {
      notFound: true
    }
  }
  const query: string = params.query.q?.toString();
  const resProduct = await fetch(Api.search.create + query);
  const product: ProductModel[] = await resProduct.json();
  const firstCategory = 0;
  const resMenu = await fetch(Api.topPage.find, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ firstCategory }),
  });
  const menu: MenuItem[] = await resMenu.json();
  if (menu.length == 0) {
    return {
      notFound: true
    }
  }
  return { props: { menu, product, firstCategory, query } }
}

export interface SearchProps extends Record<string, unknown> {
  menu: MenuItem[];
  firstCategory: TopLevelCategory;
  query: string;
  product: ProductModel[];
}