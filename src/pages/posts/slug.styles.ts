import styled, { css } from 'styled-components';

export const Container = styled.div`
  ${({ theme }) => css`
    padding: 8rem 0;

    @media (max-width: 768px) {
      padding: ${theme.spacings.xxlarge} 0;
    }
  `}
`;

export const Section = styled.section`
  ${({ theme }) => css`
    padding: 0 ${theme.spacings.small};

    max-width: 112rem;
    margin: ${theme.spacings.medium} auto;

    @media (max-width: 768px) {
      padding: 0 ${theme.spacings.xsmall};
      margin: ${theme.spacings.xlarge} auto;
    }
  `}
`;

export const BannerWrapper = styled.div`
  ${({ theme }) => css`
    margin: 0 auto;
    min-width: 60rem;
    max-width: 128rem;
    padding: 0 ${theme.spacings.large};

    @media (max-width: 768px) {
      min-width: 0;
    }
  `}
`;

export const ContentWrapper = styled.div`
  ${({ theme }) => css`
    margin-top: ${theme.spacings.medium};
  `}
`;

export const Content = styled.div`
  ${({ theme }) => css`
    h1 {
      margin: ${theme.spacings.large} 0;

      font-weight: ${theme.font.bold};
      font-size: ${theme.font.sizes.xxlarge};
    }

    h2,
    h3,
    h4,
    h5,
    h6 {
      margin-top: ${theme.spacings.large};
    }

    a {
      cursor: pointer;
      text-decoration: none;
      color: ${theme.colors.black[100]};
    }

    p {
      margin-bottom: ${theme.spacings.small};

      text-align: justify;
      line-height: 1.625rem;
      color: ${theme.colors.black[500]};
      font-size: ${theme.font.sizes.large};
      line-height: ${theme.font.sizes.xxlarge};

      @media (max-width: 768px) {
        font-size: ${theme.font.sizes.medium};
      }
    }

    img {
      max-width: 100%;
    }

    div {
      width: 100%;
    }

    iframe {
      height: auto;
      width: inherit;
      margin-top: ${theme.spacings.medium};

      aspect-ratio: 16 / 9;
    }
  `}
`;
