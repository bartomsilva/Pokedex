import styled from 'styled-components'

export const Header_ = styled.header`
    display: flex;
    justify-content: space-between;
    gap: 5px;
    padding: 0 25px;
    width: 100%;
    height: 100px;
    background-color: #fff;

    @media(max-width:768px){
        width: 100vw;
        height: 140px;
        padding: 40px 5px;
        flex-direction: column ;
        justify-content: center;   
        align-items: center;
    }
`
export const ContainerNav = styled.div`
    flex: 1;
    display: flex;
    align-items:center ;
    /* background-color: #f00; */

    @media(max-width:768px){
        order: 2;
        position: absolute;
        top: 90px;
    }
`
export const ContainerLogo = styled.div`
    flex: 1;
    display: flex;
    justify-content: center;
    align-items: center;
    /* background-color: #0f0; */

    @media(max-width:768px){
        order: 1;
    }

`
export const ContainerButton = styled.div`
    flex: 1;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    /* background-color: #00f; */

    @media(max-width:768px){
        order: 2;
    }
`

export const NavMenu = styled.nav`

    @media(max-width: 768px){
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

    width: 240px;
    
    @media(max-width:768px){
        width: 200px; 
        margin-bottom: 20px 0;
        /* align-self: center; */
        position: absolute;
        top: 10px;
        left:10px;
    }

    @media(max-width:480px){
        width: 180px;
    }            
`

export const BtnPokedex = styled.button`
    width: 165px;
    height: 50px;
    background-color: ${({ color }) => color};
    border: none;
    border-radius: 8px;
    font-family: 'Poppins', sans-serif;
    color: #fff;
    font-size: 16px;
    font-weight: normal;
    padding: 0 5px;
    cursor: pointer;

    @media(max-width:768px){
        width: 130px;
        height: 40px;   
        font-size: 90%;
        position: absolute;
        top: 30px;
        right:10px;
    }

    @media(max-width:480px){
        width: 120px; 
        height: 40px;  
        font-size: 80%; 
    }   
`