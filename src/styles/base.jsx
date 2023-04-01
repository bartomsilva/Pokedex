import { createGlobalStyle } from "styled-components";

const Base = createGlobalStyle` 
		
	:root{
        --fontPadrao: 'Cairo',sans-serif;
        --colorSvg: invert(56%) sepia(75%) saturate(2848%) 
        hue-rotate(358deg) brightness(99%) contrast(89%);
    }        

  	body{
    max-width: 1600px;
		min-height: 100vh;
    margin: 0 auto;
		background-color: #ffffff;
        font-family: var(--fontPadrao);

    @media(max-width:768px){
      ::-webkit-scrollbar{
        display: none;
      }    
    }
    
	}

`
export default Base;
