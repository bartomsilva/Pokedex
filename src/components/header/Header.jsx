import React, {useContext} from 'react'
import logo from '../../assets/logo.svg'
import leftArrow from '../../assets/left-arrow.svg'
import { useLocation, useNavigate } from 'react-router-dom';
import { GlobalContext } from '../context/GlobalContext';
import { gotoHome, gotoPokedex } from '../router/Coordination'
import * as S from './styledHeader'

export function Header() {
    const location = useLocation()
    const navigate = useNavigate()
    const context = useContext(GlobalContext)

    function deletePokemon(){
        context.removePokedex(context.infoPokemon.pokemon)
        gotoPokedex(navigate)      
    }
    
    return (
        <>
            {
                location.pathname === "/" ?
                    <S.Header_>
                        <S.Logo src={logo} alt="" />
                        <S.BtnPokedex color={'#33a4f5'} onClick={() => gotoPokedex(navigate)}>Pokédex</S.BtnPokedex>
                    </S.Header_>
                : location.pathname === "/pokedex" ?
                        <S.Header_>
                            <S.Logo src={logo} alt="" />
                            <S.NavMenu>
                                <S.NavLeftArrow src={leftArrow} alt="" />
                                <S.NavBtnAllPokemons onClick={() => gotoHome(navigate)} href="#">Todos Pokémons</S.NavBtnAllPokemons>
                            </S.NavMenu>
                        </S.Header_>
                : // aqui entra no /detail
                        <S.Header_>
                            <S.Logo src={logo} alt="" />
                            <S.NavMenu>
                                <S.NavLeftArrow src={leftArrow} alt="" />
                                <S.NavBtnAllPokemons onClick={() => gotoHome(navigate)} href="#">Todos Pokémons</S.NavBtnAllPokemons>
                            </S.NavMenu>
                            {
                                context.infoPokemon.isPokedex.includes('pokedex') ?
                                <S.BtnPokedex color={"#ff6262"} onClick={()=> deletePokemon()}>Excluir da Pokédex</S.BtnPokedex>                        
                                :""
                            }
                        </S.Header_>
            }
        </>
    )
}

