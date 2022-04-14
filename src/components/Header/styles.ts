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
      bottom: 0px;
      border-radius: 3px 3px 0 0;

      background: ${theme.colors.secondary};
    }
  `,

  isCentered: () => css`
    padding: 0;

    display: flex;
    align-items: center;
    justify-content: center;
  `,
};

export const Container = styled.div`
  ${({ theme }) => css`
    position: fixed;
    top: 0;
    left: 0;
    right: 0;

    height: ${defaultSpacing};
    border-bottom: 1px solid ${theme.colors.gray[300]};

    background: ${theme.colors.white};

    @media (max-width: 768px) {
      height: ${theme.spacings.xxlarge};
    }
  `}
`;

export const Content = styled.div`
  ${({ theme }) => css`
    width: 100%;
    height: 100%;
    margin: 0 auto;
    max-width: 112rem;
    padding: 0 ${theme.spacings.small};

    display: flex;
    align-items: center;
    flex-direction: row;

    > button {
      margin-left: auto;
    }
  `}
`;

export const Nav = styled.nav`
  ${({ theme }) => css`
    height: ${defaultSpacing};
    margin-left: ${defaultSpacing};

    @media (max-width: 768px) {
      height: ${theme.spacings.xxlarge};
      margin-left: ${theme.spacings.small};
    }
  `}
`;

export const Anchor = styled.a<{ isActive?: boolean; isCentered?: boolean }>`
  ${({ theme, isActive, isCentered }) => css`
    position: relative;

    height: ${defaultSpacing};
    line-height: ${defaultSpacing};
    padding: 0 ${theme.spacings.small};

    display: inline-block;

    cursor: pointer;
    text-decoration: none;
    transition: color 0.2s;
    color: ${theme.colors.black[500]};

    &:hover {
      color: ${theme.colors.gray[300]};
    }

    & + a {
      margin-left: ${theme.spacings.small};
    }

    @media (max-width: 768px) {
      height: ${theme.spacings.xxlarge};
      padding: 0 ${theme.spacings.xxsmall};

      line-height: ${theme.spacings.xxlarge};
    }

    ${isCentered && anchorModifiers.isCentered()};
    ${isActive && anchorModifiers.isActive(theme)};
  `}
`;
