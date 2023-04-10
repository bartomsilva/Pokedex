import styled from 'styled-components'

export const Header_ = styled.header`
    position: relative;
    top: 0;
    left: 0;
    padding: 0 25px;
    width: 100%;
    height: 110px;
    background-color: #fff;
    display: flex;
    @media(max-width:768px){
        position: static;
        width: 100vw;
        height: 140px;
        padding: 40px 5px;
        flex-direction: column ;
        justify-content: space-between;   
        align-items: center;
    }
`
export const NavMenu = styled.nav`
    position: absolute;
    top: 50%;
    left: 50px;
    transform: translateY(-50%);
    @media(max-width: 768px){
        position: static;
    }
`
export const NavLeftArrow = styled.img`
    height: 16px;
`
export const NavBtnAllPokemons = styled.a`
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 700;
    font-size: 24px;
    color: #1a1a1a;
    margin-left: 10px;
`
export const Logo = styled.img` 
    position: absolute;
    left: 50%;
    top:50%;
    transform: translate(-60%,-50%);
    width: 240px;
    
    @media(max-width:768px){
        position: static;
        width: 200px; 
        /* left: 0;
        margin-left: 25px; */
        /* transform: translate(0%,-50%); */
        margin-bottom: 20px 0;
        align-self: center;
    }

    @media(max-width:480px){
        position: static;
        width: 140px;
        /* left: 0;
        margin-left: 15px;
        transform: translate(0%,-50%); */
    }            
`

export const BtnPokedex = styled.button`
    position: absolute;
    top: 50%;
    right: 0;
    margin-right: 25px;
    transform: translateY(-50%);
    width: 165px;
    height: 50px;
    background-color: ${({color})=>color};
    border: none;
    border-radius: 8px;
    font-family: 'Poppins', sans-serif;
    color: #fff;
    font-size: 16px;
    font-weight: normal;
    cursor: pointer;

    @media(max-width:768px){
        position: static;
        width: 130px;
        height: 40px;   
        font-size: 90%;
    }

    @media(max-width:480px){
        position: static;
        width: 120px; 
        height: 40px;  
        font-size: 80%; 
        margin-right: 20px;
    }   
`