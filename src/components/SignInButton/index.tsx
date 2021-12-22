import { FiX } from 'react-icons/fi';
import { FaGithub } from 'react-icons/fa';

import * as S from './styles';

export type SignInButtonProps = {
  title?: string;
  isLoggedIn?: boolean;
};

export default function SignInButton({
  isLoggedIn = false,
  title = 'Sign in with Github',
}: SignInButtonProps) {
  return (
    <S.Container type="button" isLoggedIn={isLoggedIn}>
      <FaGithub />

      <p>{title}</p>

      {isLoggedIn && <FiX />}
    </S.Container>
  );
}
