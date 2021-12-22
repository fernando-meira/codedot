import styled, { css } from 'styled-components';

export const Container = styled.main``;

export const Section = styled.section`
  ${({ theme }) => css`
    max-width: 112rem;
    margin: ${theme.spacings.medium} auto;

    display: flex;
    align-items: center;
    justify-content: space-between;
  `}
`;

export const Hero = styled.div`
  ${({ theme }) => css`
    max-width: 600px;

    > span {
      font-size: ${theme.font.sizes.medium};
      font-weight: bold;
    }

    h1 {
      margin-top: ${theme.spacings.small};

      font-weight: ${theme.font.bold};
      font-size: ${theme.font.sizes.xxlarge};

      span {
        color: ${theme.colors.blue};
      }
    }

    p {
      margin-top: ${theme.spacings.small};

      font-size: ${theme.font.sizes.small} span {
        color: ${theme.colors.green};
        font-weight: ${theme.font.bold};
      }
    }

    button {
      margin-top: ${theme.spacings.small};
    }
  `}
`;
