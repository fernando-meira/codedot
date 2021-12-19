import theme from 'styles/theme';

// Inferência de tipos - Ou seja, o TypeScript identifica a primeira definição do tipo de uma variável como default.
type Theme = typeof theme;

declare module 'styled-components' {
  // eslint-disable-next-line @typescript-eslint/no-empty-interface
  export interface DefaultTheme extends Theme {}
}
