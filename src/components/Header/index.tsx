import * as S from './styles';
import Image from 'next/image';

import { SignInButton } from '..';

export default function Header() {
  return (
    <S.Container>
      <S.Content>
        <Image
          width={80}
          height={38}
          alt="codeDot logo"
          src="/images/logo.svg"
        />

        <S.Nav>
          <S.Anchor aria-label="Ir para a Home" isActive href="/Home">
            Home
          </S.Anchor>

          <S.Anchor aria-label="Ir para os posts" href="/Posts">
            Posts
          </S.Anchor>
        </S.Nav>

        <SignInButton title="Fernando Meira" isLoggedIn />
      </S.Content>
    </S.Container>
  );
}
