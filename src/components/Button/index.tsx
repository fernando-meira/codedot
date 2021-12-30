import * as S from './styles';

export type ButtonProps = {
  title: string;
};

export default function Button({ title }: ButtonProps) {
  return (
    <S.Container type="button">
      <p>{title}</p>
    </S.Container>
  );
}
