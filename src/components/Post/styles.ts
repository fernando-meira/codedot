import styled, { css } from 'styled-components';

export const Container = styled.div`
  ${({ theme }) => css`
    margin-top: ${theme.spacings.medium};

    a {
      display: block;
      text-decoration: none;

      & + a {
        margin-top: ${theme.spacings.medium};
        padding-top: ${theme.spacings.medium};
        border-top: 1px solid ${theme.colors.gray[300]};
      }
    }
  `}
`;
