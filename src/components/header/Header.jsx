import React from 'react'
import styled from 'styled-components'
import logo from '../../assets/logo.svg'
import leftArrow from '../../assets/left-arrow.svg'
import { useLocation, useNavigate } from 'react-router-dom';

export const Header_ = styled.header`
    position: relative;
    top: 0;
    left: 0;
    padding: 0 25px;
    width: 100%;
    height: 110px;
    background-color: #fff;
    display: flex;
    justify-content: center;    
`
export const NavMenu = styled.nav`
    position: absolute;
    top: 50%;
    left: 50px;
    transform: translateY(-50%);
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
        width: 200px;
        left: 0;
        margin-left: 25px;
        transform: translate(0%,-50%);
    }

    @media(max-width:480px){
        width: 140px;
        left: 0;
        margin-left: 15px;
        transform: translate(0%,-50%);
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
    background-color: #33A4F5;
    border: none;
    border-radius: 8px;
    font-family: 'Poppins', sans-serif;
    color: #fff;
    font-size: 16px;
    font-weight: normal;
    cursor: pointer;

    @media(max-width:768px){
        width: 130px;
        height: 40px;   
        font-size: 90%;
    }

    @media(max-width:480px){
        width: 120px; 
        height: 40px;  
        font-size: 80%; 
        margin-right: 20px;
    }   

`
export function Header() {
    const location = useLocation()
    const navigate = useNavigate()
    return (
        <>
            {
                location.pathname === "/" ?
                    <Header_>
                        <Logo src={logo} alt="" />
                        <BtnPokedex onClick={() => navigate('/pokedex')}>Pokédex</BtnPokedex>
                    </Header_>
                    : location.pathname === "/pokedex" ?
                        <Header_>
                            <NavMenu>
                                <NavLeftArrow src={leftArrow} alt="" />
                                <NavBtnAllPokemons onClick={() => navigate('/')} href="#">Todos Pokémons</NavBtnAllPokemons>
                            </NavMenu>
                            <Logo src={logo} alt="" />
                        </Header_>
                        :
                        <Header_>
                            <Logo src={logo} alt="" />
                            <BtnPokedex onClick={() => navigate('/pokedex')}>Pokédex</BtnPokedex>
                        </Header_>
            }
        </>
    )

}

