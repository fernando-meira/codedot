import * as S from './styles';
import Link from 'next/link';
import Image from 'next/image';

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
          <Link aria-label="Ir para a Home" href="/">
            <S.Anchor>Home</S.Anchor>
          </Link>

          <Link aria-label="Ir para os posts" href="/posts">
            <S.Anchor>Posts</S.Anchor>
          </Link>
        </S.Nav>
      </S.Content>
    </S.Container>
  );
}
