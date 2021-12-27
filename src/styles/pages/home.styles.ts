import styled, { css } from 'styled-components';

export const Container = styled.main``;

export const Section = styled.section`
  ${({ theme }) => css`
    max-width: 112rem;
    margin: ${theme.spacings.medium} auto;

    display: flex;
    align-items: center;
  `}
`;
