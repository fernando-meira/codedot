import styled, { css } from 'styled-components';

export const Container = styled.div`
  ${({ theme }) => css`
    height: ${theme.sizes.small};
    border-radius: ${theme.sizes.small};
    padding: 0 ${theme.spacings.xxsmall};
    border: 1px solid ${theme.colors.secondary};

    flex: 1;

    > input {
      width: 100%;
      border: none;
      outline: none;

      background: transparent;
      color: ${theme.colors.secondary};

      &::placeholder {
        color: ${theme.colors.secondary};
        font-size: ${theme.font.sizes.xsmall};
      }
    }
  `}
`;

export const Input = styled.input``;
