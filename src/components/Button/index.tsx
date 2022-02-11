import * as S from './styles';
import { ButtonHTMLAttributes } from 'react';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  title: string;
}

export default function Button({ title, ...rest }: ButtonProps) {
  return (
    <S.Container type="button" {...rest}>
      <p>{title}</p>
    </S.Container>
  );
}
