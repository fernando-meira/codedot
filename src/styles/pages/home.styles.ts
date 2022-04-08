import styled, { css } from 'styled-components';

import * as ButtonStyles from 'components/Button/styles';

export const Container = styled.main`
  position: relative;

  padding: 8rem 0;
`;

export const Section = styled.section`
  ${({ theme }) => css`
    padding: 0 ${theme.spacings.small};

    max-width: 112rem;
    margin: ${theme.spacings.medium} auto;

    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;
  `}
`;

export const Title = styled.h1`
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

export const Subtitle = styled.h3`
  ${({ theme }) => css`
    margin-top: ${theme.spacings.medium};

    text-align: center;
    font-weight: ${theme.font.normal};
    font-size: ${theme.font.sizes.large};
  `}
`;

export const SubscribeSection = styled.section`
  ${({ theme }) => css`
    width: 100%;
    max-width: 540px;
    margin-top: ${theme.spacings.medium};

    display: flex;
    align-items: center;
    justify-content: center;

    ${ButtonStyles.Container} {
      margin-left: ${theme.spacings.xsmall};
    }
  `}
`;

export const PostsSection = styled.section`
  ${({ theme }) => css`
    margin: 0 auto;
    max-width: 112rem;
    padding: 0 ${theme.spacings.small};
  `}
`;
