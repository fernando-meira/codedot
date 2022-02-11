import styled, { css, keyframes } from 'styled-components';

interface ContainerProps {
  backgroundColor?: string;
}

const hiddenStatus = keyframes`
  0%   {transform: translateY(0);}
  25%  {transform: translateY(0);}
  50%  {transform: translateY(0);}
  100% {transform: translateY(100%);}
`;

export const Container = styled.div<ContainerProps>`
  ${({ theme, backgroundColor }) => css`
    bottom: 0;
    position: fixed;

    width: 100%;
    padding: ${theme.spacings.xsmall};

    display: flex;
    align-items: center;
    justify-content: center;

    opacity: 1;
    background-color: ${backgroundColor ?? theme.colors.green[500]};

    svg {
      margin-right: ${theme.spacings.xxsmall};
    }

    animation: ${hiddenStatus} 6s;
  `}
`;

export const Title = styled.p`
  ${({ theme }) => css`
    color: ${theme.colors.white};
    font-size: ${theme.font.sizes.small};
  `}
`;
