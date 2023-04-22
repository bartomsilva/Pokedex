import { createGlobalStyle } from "styled-components";

const GlobalStyled = createGlobalStyle` 
  *{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
};
:root{
    max-width: 1360px;
    min-height: 100vh;
    margin: 0 auto;
  }

body{
  margin: 0 auto;
  background-color: #ffffff;

  @media(max-width:768px){
    ::-webkit-scrollbar{
      display: none;
    }    
  }
  
}


`
export default GlobalStyled;
