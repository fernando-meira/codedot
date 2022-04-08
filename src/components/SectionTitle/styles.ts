import styled, { css } from 'styled-components';

export const Container = styled.h2`
  ${({ theme }) => css`
    font-weight: ${theme.font.bold};
    color: ${theme.colors.secondary};
    font-size: ${theme.font.sizes.xlarge};

    span {
      font-weight: ${theme.font.light};
    }
  `}
`;
