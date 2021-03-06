import type { AppProps } from 'next/app';
import React from 'react';
import '../styles/globals.css'
import Head from 'next/head';
import { YMInitializer } from 'react-yandex-metrika';
import ym from 'react-yandex-metrika';
import Router from 'next/router';

/* Router.events.on('routeChangeComplete', (url: string) => {
  if (typeof window !== 'undefined') {
    ym('hit', url)
  }
}) */

function MyApp({ Component, pageProps, router }: AppProps) {

  return (<>
    <Head>
      <title>Мой первый проект</title>
      <meta name="description" content="Generated by create next app" />
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://mc.yandex.ru" />
      <link href="https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@300;400;500;700&display=swap" rel="stylesheet"></link>
      <link rel="icon" href="/favicon.ico" />
      <meta property="og:url" content={process.env.NEXT_PUBLIC_DOMAIN + router.asPath} />
      <meta property="og:locale" content="ru_RU" />
    </Head>
    {/* <YMInitializer accounts={[111]} options={{ webvisor: true, defender: true }} version="2" /> */}
    <Component {...pageProps} />
  </>)
}
export default MyApp
