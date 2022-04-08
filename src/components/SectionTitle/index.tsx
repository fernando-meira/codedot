import { SectionTitleProps } from '~/interfaces/General';

import * as S from './styles';

export default function SectionTitle({ title, span }: SectionTitleProps) {
  return (
    <S.Container>
      {title} {span && <span>{span}</span>}
    </S.Container>
  );
}
