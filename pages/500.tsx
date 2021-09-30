import Head from 'next/head';
import React from 'react';
import withLayout from '../layout/Layout';
import ErrorPageComponent from '../page-components/ErrorPage/ErrorPage.component';


function Error500() {

  return (<>
    <Head>
      <title>Ошибка выполнения запроса</title>
      <meta name="description" content="Попробуйте повторить попытку позже" />
    </Head>
    <ErrorPageComponent title="Ошибка выполнения запроса" description="Попробуйте повторить попытку позже" />
  </>)
}
export default withLayout(Error500)
