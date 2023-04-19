import styled from 'styled-components'
import { fadeIn } from '../../Global/GlobalEffetsStyled'

export const ExternalModal = styled.div`
    position: fixed;
    top:0;
    left: 0;
    width: 100%;
    min-height: 1000vh;
    z-index: 9999998;
    background-color: rgba(0,0,0,0.6);
`

export const MainModal = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 30px;
    pointer-events: all;
    
    animation: ${fadeIn} 400ms linear;
    width: 451px;
    height: 222px;

    position: fixed;
    left: 50%;
    top: 50%;
    transform: translate(-50%,-50%); 
    z-index: 9999999;

    background-color: #FFFFFF;
    color:#000000;
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 700;
    border-radius: 12px ;
    h2{
        font-size: 48px;        
    }
    p{
        font-size: 16px;
    }
    
      
`

