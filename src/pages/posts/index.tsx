import Head from 'next/head';
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
          <Post
            key={post.uid}
            uid={post.uid}
            href={post?.href}
            first_publication_date={post.first_publication_date}
            data={post.data}
          />
        ))}
      </S.Content>
    </S.Container>
  );
}

export async function getServerSideProps({ previewData }) {
  const client = createClient({ previewData });

  const posts = await client.getAllByType('post');

  return {
    props: { posts },
  };
}
