import Link from 'next/link';
import Image from 'next/image';

import { ActiveLink } from '~/components';

import * as S from './styles';

export default function Header() {
  return (
    <S.Container>
      <S.Content>
        <Link href="/">
          <S.Anchor isCentered>
            <Image
              width={70}
              height={33.25}
              alt="codeDot logo"
              src="/images/logo.svg"
            />
          </S.Anchor>
        </Link>

        <S.Nav>
          <ActiveLink aria-label="Ir para a Home" href="/">
            <S.Anchor>Home</S.Anchor>
          </ActiveLink>

          <ActiveLink aria-label="Ir para os posts" href="/posts">
            <S.Anchor>Posts</S.Anchor>
          </ActiveLink>
        </S.Nav>
      </S.Content>
    </S.Container>
  );
}
