import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
   :root {
      --space: #0B1E8A;
      --space-light: #3D68B2;
      --space-dark: #040327;
      --gray-01: #0D0E13;
      --gray-02: #2C2D3A;
      --gray-03: #60616F;
      --gray-04: #898A93;
      --gray-05: #D5D5DB;
      --mars: #E85937;
      --mars-light: #FF8C70;
      --mars-dark:#CF3F1D;
      --uranus: #24FFE9;
      --sun: #F5D15F;
      --jupiter: #E00E34;
      --earth: #0FDD86;
      --saturn: #554AD7;

      --text-color: #FFFFFF;

   }

   * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
      font-family: "Heebo";
   }

   html {
      font-size: 62.5%;
      @media(max-width: 1440px) {
         font-size: 93.75%;
      }
      
      @media(max-width: 375px) {
         font-size: 93.75%;
      }
   }

   body {
      -webkit-font-smoothing: antialiased;
      width: 100%;

      ::-webkit-scrollbar {
         width: 8px;
         background: var(--gray-01);
      }

      ::-webkit-scrollbar-thumb {
         background: var(--space-dark);
         border-radius: 4px;
      }
   }

`
