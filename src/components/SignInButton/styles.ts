import styled, { css, DefaultTheme } from 'styled-components';

type ButtonProps = {
  isLoggedIn: boolean;
};

const buttonModifiers = {
  isLoggedIn: (theme: DefaultTheme) => css`
    svg:first-child {
      color: ${theme.colors.green[500]};
    }
  `,
};

export const Container = styled.button<ButtonProps>`
  ${({ theme, isLoggedIn }) => css`
    border: none;
    height: ${theme.sizes.large};
    padding: 0 ${theme.spacings.small};
    border-radius: ${theme.sizes.large};

    display: flex;
    align-items: center;
    justify-content: center;

    transition: filter 0.6s;
    font-weight: ${theme.font.bold};
    color: ${theme.colors.secondary};
    background: ${theme.colors.gray[200]};

    svg {
      width: 20px;
      height: 20px;
    }

    svg:first-child {
      color: ${theme.colors.yellow[500]};
      margin-right: ${theme.spacings.xsmall};
    }

    svg:last-child {
      color: ${theme.colors.gray[500]};
      margin-left: ${theme.spacings.xsmall};
    }

    &:hover {
      filter: brightness(0.9);
    }

    ${isLoggedIn && buttonModifiers.isLoggedIn(theme)};
  `};
`;
