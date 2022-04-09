import styled, { css } from 'styled-components';

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

export const SectionTitle = styled.p`
  ${({ theme }) => css`
    font-weight: ${theme.font.bold};
    color: ${theme.colors.secondary};
    font-size: ${theme.font.sizes.xlarge};

    span {
      font-weight: ${theme.font.light};
    }
  `}
`;
