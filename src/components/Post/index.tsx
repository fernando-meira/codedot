import Link from 'next/link';
import { PostData } from '~/interfaces/Posts';

import * as S from './styles';

export default function Post({
  uid,
  href,
  first_publication_date,
  data,
}: PostData) {
  return (
    <S.Container>
      <Link key={uid} href={`/posts/${href}`}>
        <a>
          <time>{first_publication_date}</time>

          <strong>{data.title[0].text}</strong>

          <p>{data.content[0].text}</p>
        </a>
      </Link>
    </S.Container>
  );
}
