import styled, { css } from 'styled-components';

import * as ButtonStyles from 'components/Button/styles';

export const Container = styled.main``;

export const Section = styled.section`
  ${({ theme }) => css`
    max-width: 112rem;
    margin: ${theme.spacings.medium} auto;

    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;
  `}
`;

export const MainMessage = styled.h2`
  ${({ theme }) => css`
    font-weight: ${theme.font.bold};
    color: ${theme.colors.secondary};
    font-size: ${theme.font.sizes.xlarge};

    span {
      font-weight: ${theme.font.light};
    }
  `}
`;

export const Title = styled.h1`
  ${({ theme }) => css`
    margin-top: ${theme.spacings.medium};

    line-height: 40px;
    text-align: center;
    font-weight: ${theme.font.black};
    font-size: ${theme.font.sizes.biggest};
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

export const SubscribeSection = styled.div`
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
