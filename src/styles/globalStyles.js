import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

const GlobalStyle = createGlobalStyle`
  ${reset}

  *, html, body{
    box-sizing:border-box;
    font-family: 'Noto Sans KR', sans-serif;
    
    &:focus {
      outline: none;
    }
  }

  button {
    cursor: pointer;
    border: none;
  }
  `;
export default GlobalStyle;
