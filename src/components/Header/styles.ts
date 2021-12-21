import styled, { css, DefaultTheme } from 'styled-components';

const defaultSpacing = '8rem';

const anchorModifiers = {
  isActive: (theme: DefaultTheme) => css`
    font-weight: ${theme.font.bold};
    color: ${theme.colors.secondary};

    ::after {
      content: '';
      left: 0;
      position: absolute;

      width: 100%;
      height: 4px;
      bottom: 1px;
      border-radius: 3px 3px 0 0;

      background: ${theme.colors.yellow[500]};
    }
  `,
};

export const Container = styled.div`
  ${({ theme }) => css`
    height: ${defaultSpacing};
    border-bottom: 1px solid ${theme.colors.secondary};
  `}
`;

export const Content = styled.div`
  ${({ theme }) => css`
    height: 100%;
    margin: 0 auto;
    max-width: 112rem;
    padding: 0 ${theme.spacings.small};

    display: flex;
    align-items: center;
    flex-direction: row;

    nav {
      height: ${defaultSpacing};
      margin-left: ${defaultSpacing};
    }
  `}
`;

export const Anchor = styled.a<{ isActive?: boolean }>`
  ${({ theme, isActive }) => css`
    position: relative;

    height: ${defaultSpacing};
    line-height: ${defaultSpacing};
    padding: 0 ${theme.spacings.small};

    display: inline-block;

    text-decoration: none;
    transition: color 0.2s;
    color: ${theme.colors.gray[500]};

    &:hover {
      color: ${theme.colors.gray[300]};
    }

    & + a {
      margin-left: ${theme.spacings.small};
    }

    ${isActive && anchorModifiers.isActive(theme)};
  `}
`;
