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
  `}
`;

export const Title = styled.h1`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.biggest};

    @media (max-width: 768px) {
      margin-top: ${theme.spacings.xlarge};

      font-size: ${theme.font.sizes.xxlarge};
    }
  `}
`;

export const DateText = styled.p`
  ${({ theme }) => css`
    padding: ${theme.spacings.small} 0;

    text-align: left;
    color: ${theme.colors.gray[500]};
    font-size: ${theme.font.sizes.small};
  `}
`;
