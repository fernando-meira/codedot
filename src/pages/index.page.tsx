import Head from 'next/head';
import { RichText } from 'prismic-dom';

import { createClient } from '~/../prismicio';
import { PostsProps } from '~/interfaces/Posts';
import * as S from '~/styles/pages/home.styles';
import { Header, Title, Post, SectionTitle } from '~/components';

export default function Home({ posts }: PostsProps) {
  return (
    <S.Container>
      <Head>
        <title>code .</title>
      </Head>

      <Header />

      <S.Section>
        <SectionTitle title="code." span="- Never forget syntax again!" />

        <Title content={'Write, search, read<br /> and connect to studies!'} />

        <S.Subtitle>
          {`"It's easy and free to post your ideas about your study topics."`}
        </S.Subtitle>
      </S.Section>

      <S.PostsSection>
        <SectionTitle title="Recent" span="blog posts" />

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
