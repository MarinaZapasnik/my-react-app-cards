import { createGlobalStyle } from "styled-components";



export const GlobalStyles = createGlobalStyle`
@font-face {
    font-family: 'Inter';
    src: url('/src/assets/fonts/Inter_18pt-Bold.ttf') format('truetype');
    font-weight: 700;
    font-style: normal;
  }

  @font-face {
    font-family: 'Inter';
    src: url('/src/assets/fonts/Inter_18pt-Medium.ttf') format('truetype');
    font-weight: 500;
    font-style: normal;
  }
  
    *,
    *::before,
    *::after {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body {
        background-color: #f5f5f5;
        margin: 0;
        display: flex;
        justify-content: center;
        align-items: center;

    }
`