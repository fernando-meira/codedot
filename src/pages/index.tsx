import Head from 'next/head';

import { Header } from '~/components';

import * as S from '~/styles/pages/home.styles';

export default function Home() {
  return (
    <S.Container>
      <Head>
        <title>codeDot</title>
      </Head>

      <Header />

      <S.Section></S.Section>
    </S.Container>
  );
}
