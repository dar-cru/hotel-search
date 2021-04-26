import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Open+Sans&display=swap');
  body {
    min-width: 320px;
    background: white;
    width: 100%;
    font-family: 'Open Sans', sans-serif;
    font-weight: 200;
  }

  h2 {
    font-weight: 400;
    font-size: 1.25rem;
  }
`;

export default GlobalStyle;
