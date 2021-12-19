import * as S from './styles';
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

        <nav>
          <S.Anchor isActive href="#">
            Home
          </S.Anchor>

          <S.Anchor href="#">Posts</S.Anchor>
        </nav>
      </S.Content>
    </S.Container>
  );
}
