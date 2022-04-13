import styled, { css } from 'styled-components';

export const Container = styled.div`
  position: relative;

  @media (max-width: 768px) {
    box-shadow: 0 0.4rem 0.5rem 0 rgba(0, 0, 0, 0.2);
  }
`;

export const Image = styled.div<{ src: string }>`
  ${({ theme, src }) => css`
    width: 100%;
    height: 58rem;

    background-size: cover;
    background-image: url(${src});
    background-position: center center;
    background-color: ${theme.colors.primary};

    @media (max-width: 768px) {
      height: 23rem;
    }
  `}
`;

export const Caption = styled.div`
  ${({ theme }) => css`
    left: 0;
    bottom: 0;
    position: absolute;

    width: 100%;
    padding: ${theme.spacings.small};

    backdrop-filter: blur(6px);
    background-color: rgba(0, 0, 0, 0.7);

    @media (max-width: 768px) {
      padding: ${theme.spacings.xxsmall};
    }
  `}
`;

export const Title = styled.h2`
  ${({ theme }) => css`
    color: ${theme.colors.white};
    font-weight: ${theme.font.bold};
    font-size: ${theme.font.sizes.large};
  `}
`;

export const Subtitle = styled.h3`
  ${({ theme }) => css`
    margin-bottom: ${theme.spacings.xxsmall};

    color: ${theme.colors.white};
    font-weight: ${theme.font.normal};
    font-size: ${theme.font.sizes.small};

    strong {
      color: ${theme.colors.primary};
      font-weight: ${theme.font.bold};
    }

    @media (max-width: 768px) {
      font-size: ${theme.font.sizes.large};
    }
  `}
`;
