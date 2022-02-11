import styled, { css } from 'styled-components';

interface ContainerProps {
  backgroundColor?: string;
}

export const Container = styled.div<ContainerProps>`
  ${({ theme, backgroundColor }) => css`
    bottom: 0;
    position: fixed;

    width: 100%;
    padding: ${theme.spacings.xsmall};

    display: flex;
    align-items: center;
    justify-content: center;

    background-color: ${backgroundColor ?? theme.colors.green[500]};

    svg {
      margin-right: ${theme.spacings.xxsmall};
    }
  `}
`;

export const Title = styled.p`
  ${({ theme }) => css`
    color: ${theme.colors.white};
    font-size: ${theme.font.sizes.small};
  `}
`;
