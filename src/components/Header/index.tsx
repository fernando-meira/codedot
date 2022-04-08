import * as S from './styles';
import Image from 'next/image';

import { ActiveLink } from '~/components';

export default function Header() {
  return (
    <S.Container>
      <S.Content>
        <Image
          width={70}
          height={33.25}
          alt="codeDot logo"
          src="/images/logo.svg"
        />

        <S.Nav>
          <ActiveLink aria-label="Ir para a Home" href="/">
            <S.Anchor>Home</S.Anchor>
          </ActiveLink>

          <ActiveLink aria-label="Ir para os posts" href="/posts" prefetch>
            <S.Anchor>Posts</S.Anchor>
          </ActiveLink>
        </S.Nav>
      </S.Content>
    </S.Container>
  );
}
