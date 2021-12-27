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

      <S.Section>
        <S.MainMessage>
          code. <span>- Never forget syntax again!</span>
        </S.MainMessage>

        <S.Title>
          Write, search, read
          <br /> and connect to studies!
        </S.Title>

        <S.Subtitle>
          It's easy and free to post your ideas about your study topics.
        </S.Subtitle>
      </S.Section>
    </S.Container>
  );
}
