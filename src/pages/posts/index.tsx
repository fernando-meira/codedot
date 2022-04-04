import Head from 'next/head';

import { Header, Post } from '~/components';

import * as S from './styles';

export default function Posts() {
  return (
    <S.Container>
      <Head>
        <title>Posts | CodeDot</title>
      </Head>

      <Header />

      <S.Content>
        {Array.from({ length: 10 }).map((_, index) => (
          <Post key={index} />
        ))}
      </S.Content>
    </S.Container>
  );
}
