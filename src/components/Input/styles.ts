import styled, { css } from 'styled-components';
import hexToRgba from 'hex-to-rgba';

export const Container = styled.div`
  ${({ theme }) => css`
    height: ${theme.sizes.medium};
    border-radius: ${theme.sizes.small};
    padding: 0 ${theme.spacings.xxsmall};
    border: 1px solid ${hexToRgba(theme.colors.secondary, 0.3)};

    flex: 1;
    display: flex;
    align-items: center;

    > input {
      width: 100%;
      border: none;
      outline: none;

      background: transparent;
      color: ${theme.colors.black[100]};

      &::placeholder {
        font-size: ${theme.font.sizes.xsmall};
        color: ${hexToRgba(theme.colors.secondary, 0.5)};
      }
    }
  `}
`;

export const Input = styled.input``;
