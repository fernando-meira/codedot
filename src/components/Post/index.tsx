import Link from 'next/link';

import { Summary, DateText, SummaryTitle } from '~/components';
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
          <DateText>{post.updatedAt}</DateText>

          <SummaryTitle content={post.title} />

          {post.content ? (
            <Summary content={post.content} />
          ) : (
            <Summary content={post.excerpt} />
          )}
        </a>
      </Link>
    </S.Container>
  );
}
