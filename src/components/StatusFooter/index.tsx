import * as S from './styles';
import { AiOutlineCheckCircle } from 'react-icons/ai';

import theme from '~/styles/theme';

interface StatusFooterProps {
  title: string;
  backgroundColor?: string;
}

export default function StatusFooter({
  title,
  backgroundColor,
}: StatusFooterProps) {
  return (
    <S.Container backgroundColor={backgroundColor}>
      <AiOutlineCheckCircle size={24} color={theme.colors.white} />

      <S.Title>{title}</S.Title>
    </S.Container>
  );
}
