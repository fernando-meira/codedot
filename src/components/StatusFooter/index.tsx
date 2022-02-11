import { useEffect } from 'react';
import { AiOutlineCheckCircle } from 'react-icons/ai';

import * as S from './styles';
import theme from '~/styles/theme';

interface StatusFooterProps {
  title: string;
  isActive?: boolean;
  backgroundColor?: string;
  setIsActive?: (param: boolean) => void;
}

export default function StatusFooter({
  title,
  setIsActive,
  backgroundColor,
  isActive = false,
}: StatusFooterProps) {
  useEffect(() => {
    let interval: NodeJS.Timeout = undefined;

    interval = setInterval(() => {
      setIsActive(false);
    }, 6000);

    return () => window.clearInterval(interval);
  }, [setIsActive]);

  return isActive ? (
    <S.Container backgroundColor={backgroundColor}>
      <AiOutlineCheckCircle size={24} color={theme.colors.white} />

      <S.Title>{title}</S.Title>
    </S.Container>
  ) : (
    <></>
  );
}
