import hexToRgba from 'hex-to-rgba';
import styled, { css } from 'styled-components';

export const Title = styled.h1`
  ${({ theme }) => css`
    margin-top: ${theme.spacings.medium};

    line-height: 6rem;
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

    @media (max-width: 768px) {
      text-align: center;
    }
  `}
`;

export const DateText = styled.time`
  ${({ theme }) => css`
    display: flex;
    align-items: center;

    color: ${theme.colors.gray[500]};
    font-size: ${theme.font.sizes.medium};

    @media (max-width: 768px) {
      font-size: ${theme.font.sizes.small};
    }
  `}
`;

export const SummaryTitle = styled.h2`
  ${({ theme }) => css`
    margin-top: ${theme.spacings.xxsmall};

    display: block;

    line-height: 34px;
    transition: color 0.4s;
    color: ${theme.colors.secondary};
    font-size: ${theme.font.sizes.xxlarge};

    @media (max-width: 768px) {
      margin-top: 0;

      line-height: 24px;
      font-size: ${theme.font.sizes.xlarge};
    }

    &:hover {
      color: ${hexToRgba(theme.colors.secondary, 0.3)};
    }
  `}
`;

export const Summary = styled.p`
  ${({ theme }) => css`
    margin-top: ${theme.spacings.xxsmall};

    overflow: hidden;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    text-overflow: ellipsis;
    -webkit-box-orient: vertical;

    text-align: justify;
    line-height: 1.625rem;
    color: ${theme.colors.black[500]};
    font-size: ${theme.font.sizes.large};
    line-height: ${theme.font.sizes.xxlarge};

    @media (max-width: 768px) {
      line-height: 20px;
      -webkit-line-clamp: 3;

      font-size: ${theme.font.sizes.medium};
    }
  `}
`;

export const SpanText = styled.span`
  ${({ theme }) => css`
    color: ${theme.colors.secondary};
    font-size: ${theme.font.sizes.small};
  `}
`;
