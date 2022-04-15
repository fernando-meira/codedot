import Head from 'next/head';
import { RichText } from 'prismic-dom';
import { createClient } from '../../../prismicio';

import { Header, Post } from '~/components';
import { PostsProps } from '~/interfaces/Posts';

import * as S from './styles';

export default function Posts({ posts }: PostsProps) {
  return (
    <S.Container>
      <Head>
        <title>Posts | CodeDot</title>
      </Head>

      <Header />

      <S.Content>
        {posts.map((post) => (
          <Post key={post.uid} post={post} />
        ))}
      </S.Content>
    </S.Container>
  );
}

export async function getServerSideProps({ previewData }) {
  const client = createClient({ previewData });

  const response = await client.getAllByType('post');

  const posts = response.map((post) => {
    return {
      uid: post.uid,
      slug: post.slugs[0],
      title: RichText.asText(post.data.title),
      excerpt: post.data.content.find((content) => content.type === 'paragraph')
        ?.text,
      updatedAt: post.last_publication_date,
    };
  });

  return {
    props: { posts },
  };
}
