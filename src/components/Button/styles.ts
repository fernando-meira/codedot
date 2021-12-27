import styled, { css } from 'styled-components';

export const Container = styled.button`
  ${({ theme }) => css`
    border: none;
    border-radius: 4.8rem;
    padding: 0 ${theme.spacings.small};
    height: ${theme.font.sizes.xxlarge};

    display: flex;
    align-items: center;
    justify-content: center;

    transition: filter 0.6s;
    text-transform: capitalize;
    font-weight: ${theme.font.bold};
    color: ${theme.colors.secondary};
    background: ${theme.colors.gray[200]};

    &:hover {
      filter: brightness(0.9);
    }
  `};
`;
