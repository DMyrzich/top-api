import Head from 'next/head';
import React from 'react';
import withLayout from '../layout/Layout';
import ErrorPageComponent from '../page-components/ErrorPage/ErrorPage.component';


function Error404() {

  return (<>
    <Head>
      <title>Запрашиваемая страница не найдена</title>
      <meta name="description" content="Попробуйте выбрать другой раздел или воспользоваться поиском" />
    </Head>
    <ErrorPageComponent title="Запрашиваемая страница не найдена" description="Попробуйте выбрать другой раздел или воспользоваться поиском" />
  </>)
}
export default withLayout(Error404)
