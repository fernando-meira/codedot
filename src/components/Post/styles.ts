import styled, { css } from 'styled-components';
import hexToRgba from 'hex-to-rgba';

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

      strong {
        margin-top: ${theme.spacings.xxsmall};

        display: block;

        line-height: 34px;
        transition: color 0.4s;
        color: ${theme.colors.secondary};
        font-size: ${theme.font.sizes.xxlarge};
      }

      p {
        margin-top: ${theme.spacings.xxsmall};

        line-height: 1.625rem;
        color: ${theme.colors.black[500]};
      }

      &:hover strong {
        color: ${hexToRgba(theme.colors.secondary, 0.3)};
      }
    }
  `}
`;
