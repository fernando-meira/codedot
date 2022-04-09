import styled, { css } from 'styled-components';

export const Container = styled.h1`
  ${({ theme }) => css`
    margin-top: ${theme.spacings.medium};

    line-height: 40px;
    text-align: center;
    font-weight: ${theme.font.black};
    font-size: ${theme.font.sizes.biggest};

    @media (max-width: 768px) {
      margin-top: ${theme.spacings.small};

      line-height: ${theme.spacings.medium};
      font-size: ${theme.font.sizes.xxlarge};
    }
  `}
`;
