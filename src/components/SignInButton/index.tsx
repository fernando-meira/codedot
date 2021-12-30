import { FiX } from 'react-icons/fi';
import { FaGithub } from 'react-icons/fa';
import { useSession, signIn, signOut } from 'next-auth/react';

import * as S from './styles';

export default function SignInButton() {
  const { data: session } = useSession();

  return (
    <S.Container
      type="button"
      isLoggedIn={!!session}
      onClick={() => (session ? signOut() : signIn('github'))}
    >
      <FaGithub />

      <p>{!session ? 'Sign in with Github' : session.user.name}</p>

      {!!session && <FiX />}
    </S.Container>
  );
}
