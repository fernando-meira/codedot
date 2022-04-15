import Link from 'next/link';

import { formatDate } from '~/utils';
import { PostData } from '~/interfaces/Posts';
import { Summary, DateText, SummaryTitle } from '~/components';

import * as S from './styles';

interface PostProps {
  post: PostData;
}

export default function Post({ post }: PostProps) {
  return (
    <S.Container>
      <Link key={post.uid} href={`/posts/${post.slug}`}>
        <a>
          <DateText>{formatDate(post.updatedAt)}</DateText>

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
