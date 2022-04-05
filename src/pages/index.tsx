import Head from 'next/head';
import { RichText } from 'prismic-dom';

import { createClient } from '~/../prismicio';
import { PostsProps } from '~/interfaces/Posts';
import * as S from '~/styles/pages/home.styles';
import { Button, Header, Input, Post } from '~/components';

export default function Home({ posts }: PostsProps) {
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

        {posts.map((post) => (
          <Post key={post.uid} post={post} />
        ))}
      </S.PostsSection>
    </S.Container>
  );
}

export async function getServerSideProps({ previewData }) {
  const client = createClient({ previewData });

  const response = await client.getAllByType('post');

  const posts = response
    .filter((_, index) => index <= 2)
    .map((post) => {
      return {
        uid: post.uid,
        slug: post.slugs[0],
        title: RichText.asText(post.data.title),
        excerpt:
          `${post.data.content
            .find((content) => content.type === 'paragraph')
            ?.text.substr(0, 295)}...` ?? '',
        updatedAt: new Date(post.last_publication_date).toLocaleDateString(
          'pt-BR',
          {
            day: '2-digit',
            month: 'long',
            year: 'numeric',
          }
        ),
      };
    });

  return {
    props: { posts },
  };
}
