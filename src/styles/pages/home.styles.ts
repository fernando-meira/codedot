import styled, { css } from 'styled-components';

import * as ButtonStyles from 'components/Button/styles';

export const Container = styled.main`
  ${({ theme }) => css`
    position: relative;

    padding: 8rem 0;

    @media (max-width: 768px) {
      padding: ${theme.spacings.xlarge} 0;
    }
  `}
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

    @media (max-width: 768px) {
      padding: 0 ${theme.spacings.xsmall};
    }
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

    @media (max-width: 768px) {
      padding: 0 ${theme.spacings.xsmall};
    }
  `}
`;
