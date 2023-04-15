import * as S from './styled'
import React, { useContext } from 'react'
import logo from '/image/logo.svg'
import leftArrow from '/image/left-arrow.svg'
import { useLocation, useNavigate } from 'react-router-dom';
import { GlobalContext } from '../../Global/GlobalStateContext';
import { gotoHome, gotoPokedex } from '../../Router/Coordination'

export function Header() {
    const location = useLocation()
    const navigate = useNavigate()
    const context = useContext(GlobalContext)
 
    console.log("af",context?.infoPokemon?.pokemon?.pathName)
    return (
        <>
            {
                location.pathname === "/" &&
                <S.Header_>
                    <S.Logo src={logo} alt="" />
                    <S.BtnPokedex color={'#33a4f5'} onClick={() => gotoPokedex(navigate)}>Pokédex</S.BtnPokedex>
                </S.Header_>
            }
            {
                location.pathname === "/pokedex" &&
                <S.Header_>
                    <S.Logo src={logo} alt="" />
                    <S.NavMenu>
                        <S.NavLeftArrow src={leftArrow} alt="" />
                        <S.NavBtnAllPokemons onClick={() => gotoHome(navigate)} href="#">Todos Pokémons</S.NavBtnAllPokemons>
                    </S.NavMenu>
                </S.Header_>
            }
            {
                location.pathname === "/details" &&
                <S.Header_>
                    <S.Logo src={logo} alt="" />
                    <S.NavMenu>
                        <S.NavLeftArrow src={leftArrow} alt="" />
                        {
                            context.infoPokemon.pokemon.pathName==='/' ?
                                <S.NavBtnAllPokemons onClick={() => gotoHome(navigate)} href="#">Todos Pokémons</S.NavBtnAllPokemons>
                                :
                                <S.NavBtnAllPokemons onClick={() => gotoPokedex(navigate)} href="#">Pokédex</S.NavBtnAllPokemons>
                        }
                    </S.NavMenu>
                    {
                        context.infoPokemon.pokemon.isPokedex &&
                        <S.BtnPokedex color={"#ff6262"}
                            onClick={() =>context.handleStatusPokemon(context.infoPokemon.pokemon, false)}
                            >Excluir da Pokédex</S.BtnPokedex>
                    }
                    {
                        !context.infoPokemon.pokemon.isPokedex &&
                        <S.BtnPokedex color={"#33a4f5"}
                            onClick={() => context.handleStatusPokemon(context.infoPokemon.pokemon, true)}
                            >Capturar</S.BtnPokedex>                    }
                </S.Header_>
            }
        </>
    )
}

