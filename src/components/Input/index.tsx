import { forwardRef, InputHTMLAttributes } from 'react';

import * as S from './styles';

const Input: React.ForwardRefRenderFunction<
  HTMLInputElement,
  InputHTMLAttributes<HTMLInputElement>
> = ({ ...rest }, ref) => {
  return (
    <S.Container>
      <S.Input ref={ref} type="text" {...rest} />
    </S.Container>
  );
};

export default forwardRef(Input);
