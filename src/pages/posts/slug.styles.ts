import styled, { css } from 'styled-components';

export const Container = styled.div`
  ${({ theme }) => css`
    padding: 8rem 0;

    @media (max-width: 768px) {
      padding: ${theme.spacings.small} 0;
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

export const ContentWrapper = styled.div`
  ${({ theme }) => css`
    margin-top: ${theme.spacings.medium};
  `}
`;

export const Content = styled.div`
  ${({ theme }) => css`
    h1 {
      margin-bottom: ${theme.spacings.large};

      font-weight: ${theme.font.bold};
      font-size: ${theme.font.sizes.xxlarge};
    }

    p {
      margin-top: ${theme.spacings.xxsmall};

      text-align: justify;
      line-height: 1.625rem;
      color: ${theme.colors.black[500]};
      font-size: ${theme.font.sizes.large};
      line-height: ${theme.font.sizes.xxlarge};

      @media (max-width: 768px) {
        font-size: ${theme.font.sizes.medium};
      }
    }
  `}
`;
