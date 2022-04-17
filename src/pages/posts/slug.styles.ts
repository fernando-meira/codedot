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
    margin: 0 auto;

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
      word-break: break-word;
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

    li,
    ol {
      list-style: none;
    }

    iframe {
      height: auto;
      width: inherit;
      margin-top: ${theme.spacings.medium};

      aspect-ratio: 16 / 9;
    }

    pre {
      overflow: auto;
      margin: 1rem 0 2rem;
      border: 1px solid transparent;
      padding: 1rem 2.5rem 1rem 1rem;
      border-radius: ${theme.border.radius};

      color: ${theme.colors.primary};
      background-color: ${theme.colors.black[500]};
    }

    .inline-code {
      padding: 0 0.5ch;
      display: inline-block;

      font-family: monospace;
      color: ${theme.colors.red[500]};
      background-color: ${theme.colors.gray[200]};
    }
  `}
`;
