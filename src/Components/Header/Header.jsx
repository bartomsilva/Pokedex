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

    return (
        <>
            {
                location.pathname === "/" &&
                <S.Header_>
                    <S.ContainerNav>
                    </S.ContainerNav>
                    <S.ContainerLogo>
                        <S.Logo src={logo} alt="logo Pokémon" />
                    </S.ContainerLogo>
                    <S.ContainerButton>
                        <S.BtnPokedex color={'#33a4f5'} onClick={() => gotoPokedex(navigate)}>Pokédex</S.BtnPokedex>
                    </S.ContainerButton>
                </S.Header_>
            }

            {
                location.pathname === "/pokedex" &&
                <S.Header_>
                    <S.ContainerNav>
                        <S.NavMenu>
                            <S.NavLeftArrow src={leftArrow} alt="" />
                            <S.NavBtnAllPokemons onClick={() => gotoHome(navigate)} href="#">Todos Pokémons</S.NavBtnAllPokemons>
                        </S.NavMenu>
                    </S.ContainerNav>
                    <S.ContainerLogo>
                        <S.Logo src={logo} alt="logo Pokémon" />
                    </S.ContainerLogo>
                    <S.ContainerButton>
                    </S.ContainerButton>
                </S.Header_>
            }

            {
                location.pathname.includes("/details") &&
                <S.Header_>
                    <S.ContainerNav>
                        <S.NavLeftArrow src={leftArrow} alt="" />
                        {
                            context.infoLastPage.pathLastPage === '/' ?
                                <S.NavBtnAllPokemons onClick={() => gotoHome(navigate)} href="#">
                                    Todos Pokémons
                                </S.NavBtnAllPokemons>
                                :
                                <>
                                    <S.NavBtnAllPokemons onClick={() => gotoHome(navigate)} href="#">
                                        Todos Pokémons
                                    </S.NavBtnAllPokemons>
                                    <S.NavBtnAllPokemons onClick={() => gotoPokedex(navigate)} href="#">
                                        * Pokédex
                                    </S.NavBtnAllPokemons>

                                </>

                        }
                    </S.ContainerNav>

                    <S.ContainerLogo>
                        <S.Logo src={logo} alt="logo Pokémon" />
                    </S.ContainerLogo>

                    <S.ContainerButton>
                        {
                            !context.noPokedex(context.infoLastPage?.pokemon?.name) &&
                            <S.BtnPokedex color={"#ff6262"}
                                onClick={() => context.removePokemonPokedex(context.infoLastPage?.pokemon)}>
                                Excluir da Pokédex
                            </S.BtnPokedex>
                        }
                        {
                            context.noPokedex(context.infoLastPage.pokemon?.name) &&
                            <S.BtnPokedex color={"#33a4f5"}
                                onClick={() => context.addPokemonPokedex(context.infoLastPage?.pokemon)}>
                                Capturar
                            </S.BtnPokedex>
                        }
                    </S.ContainerButton>
                </S.Header_>
            }

        </>
    )
}

