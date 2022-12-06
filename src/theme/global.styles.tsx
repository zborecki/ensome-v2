import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  *, *::before, *::after {
    box-sizing: border-box;
  }

  body {
    font-family: ${({ theme: { common } }) => common.paragraph}, sans-serif;
    background: ${({ theme: { common } }) => common.background};
  }
`;
