import { useState } from 'react';
import Head from 'next/head';

import { Button, Header, Input, Post, StatusFooter } from '~/components';

import * as S from '~/styles/pages/home.styles';

export default function Home() {
  const [showStatus, setShowStatus] = useState(false);

  return (
    <S.Container>
      <Head>
        <title>codeDot</title>
      </Head>

      <Header />

      <S.Section>
        <S.FeedbackMessage>
          code. <span>- Never forget syntax again!</span>
        </S.FeedbackMessage>

        <S.Title>
          Write, search, read
          <br /> and connect to studies!
        </S.Title>

        <S.Subtitle>
          "It's easy and free to post your ideas about your study topics."
        </S.Subtitle>

        <S.SubscribeSection>
          <Input placeholder="Enter your email" type="email" />

          <Button title="subscribe" onClick={() => setShowStatus(true)} />
        </S.SubscribeSection>
      </S.Section>

      <S.PostsSection>
        <S.FeedbackMessage>
          Recent <span>blog posts</span>
        </S.FeedbackMessage>

        <Post />
      </S.PostsSection>

      <StatusFooter
        isActive={showStatus}
        setIsActive={setShowStatus}
        title="Código Pix copiado com sucesso!"
      />
    </S.Container>
  );
}
