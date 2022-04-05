import Link from 'next/link';

import { PostData } from '~/interfaces/Posts';

import * as S from './styles';

interface PostProps {
  post: PostData;
}

export default function Post({ post }: PostProps) {
  return (
    <S.Container>
      <Link key={post.uid} href={`/posts/${post.slug}`}>
        <a>
          <time>{post.updatedAt}</time>

          <strong>{post.title}</strong>

          {post.content ? <p>{post.content}</p> : <p>{post.excerpt}</p>}
        </a>
      </Link>
    </S.Container>
  );
}
