import styled, { css } from 'styled-components';

export const Container = styled.div`
  ${({ theme }) => css`
    padding: 8rem 0;

    @media (max-width: 768px) {
      padding: ${theme.spacings.small} 0;
    }
  `}
`;

export const Content = styled.section`
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
