import { createGlobalStyle, css } from 'styled-components';

export default createGlobalStyle`
  @font-face {
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 300;
    font-display: swap;
    src: local(''),
      url('/fonts/poppins-v15-latin-300.woff2') format('woff2'),
  }
  @font-face {
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 400;
    font-display: swap;
    src: local(''),
      url('/fonts/poppins-v15-latin-regular.woff2') format('woff2'),
  }
  @font-face {
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 600;
    font-display: swap;
    src: local(''),
      url('/fonts/poppins-v15-latin-600.woff2') format('woff2'),
  }
  @font-face {
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 900;
    font-display: swap;
    src: local(''),
      url('/fonts/poppins-v15-latin-900.woff2') format('woff2'),
  }

  * {
    margin:0;
    padding: 0;
    box-sizing: border-box;

    -moz-osx-font-smoothing: grayscale;
    -webkit-font-smoothing: antialiased;
  }

  ${({ theme }) => css`
    html {
      font-size: 62.5%;
    }

    body {
      background: ${theme.colors.primary};
      font-size: ${theme.font.sizes.medium};
      font-family: 'Poppins', -apple-system, BlinkMacSystemFont, 'Segoe UI',
        Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue',
        sans-serif;
    }

    button {
      cursor: pointer;
    }
  `}
`;
