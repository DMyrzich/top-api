import type { GetStaticProps } from 'next'
import Button from '../q-components/Button/Button'
import H from '../q-components/H/H'
import Paragraph from '../q-components/Paragraph/Paragraph'
import Tags from '../q-components/Tag/Tag';
import Rating from '../q-components/Rating/Rating';
import React, { useState } from 'react';
import withLayout from '../layout/Layout';
import { MenuItem } from '../interface/menu.interface';
import Textarea from '../q-components/Textarea/Textarea';


function Home({ menu }: HomeProps): JSX.Element {

  const [rating, setRating] = useState<number>(0);

  return (
    <>
      <H h="h1">Тssекст</H>
      <Button appearance="primary" arrow="right">Узнать подробнее</Button>
      <Button appearance="ghost" arrow="down">Кнопка</Button>
      <Paragraph size="l">Большой</Paragraph>
      <Paragraph>Средний</Paragraph>
      <Paragraph size="s">Маленький</Paragraph>
      <Tags color="red" size="m">red</Tags>
      <Tags color="grey" size="m">grey</Tags>
      <Tags color="green" size="s">green</Tags>
      <Tags color="ghost" size="s">ghost</Tags>
      <Tags color="primary" size="s">primary</Tags>
      <Textarea></Textarea>
      <Rating rating={2} />
      <Rating rating={rating} isEditable setRating={setRating} />
    </>
  )
}

export default withLayout(Home)

export const getStaticProps: GetStaticProps<HomeProps> = async () => {
  const firstCategory = 0;
  const response = await fetch(process.env.NEXT_PUBLIC_DOMAIN + "/api/top-page/find", {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ firstCategory }),
  });
  return { props: { menu: await response.json(), firstCategory } }
}

export interface HomeProps extends Record<string, unknown> {
  menu: MenuItem[];
  firstCategory: number;
}