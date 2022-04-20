import Head from 'next/head';
import { RichText } from 'prismic-dom';

import { createClient } from '~/../prismicio';
import { PostsProps } from '~/interfaces/Posts';
import * as S from '~/styles/pages/home.styles';
import { Header, Title, Subtitle, Post, SectionTitle } from '~/components';
import { arithmeticOperations } from '~/challenges';

export default function Home({ posts }: PostsProps) {
  return (
    <S.Container>
      <Head>
        <title>code .</title>
      </Head>

      <Header />

      <S.Section>
        <SectionTitle
          content={'code . <span> - Never forget syntax again!<span>'}
        />

        <Title content={'Write, search, read<br /> and connect to studies!'} />

        <Subtitle
          content={`"It's easy and free to post your ideas about your study topics."`}
        />
      </S.Section>

      <S.PostsSection>
        <SectionTitle content={'Recent <span> - blog posts<span>'} />

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

  const posts = response.slice(0, 3).map((post) => {
    return {
      uid: post.uid,
      slug: post.slugs[0],
      title: RichText.asText(post.data.title),
      excerpt:
        post.data.content.find((content) => content.type === 'paragraph')
          .text ?? '',
      updatedAt: post.last_publication_date,
    };
  });

  return {
    props: { posts },
  };
}
