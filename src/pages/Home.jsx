import styled from 'styled-components'
// import logo from '../assets/logo.svg'
import PokeCard from '../components/pokecard/PokeCard'
import { useContext } from 'react'
import { PokedexContext } from '../components/context/PokedexContext'
import Header from '../components/header/Header'
import { Container } from '../styles/styled'
import { Main } from '../styles/styled'
import { HeaderCards, TitleCard, ContainerCard } from '../styles/styled'
import { PokemonColorBG, dataAbiliti} from '../components/constants/Constants'


export default function Home() {

    const { pokemons } = useContext(PokedexContext)

    return (
        <Container>

            <Header/>

            <Main>
                
                <HeaderCards>
                    <TitleCard>Todos Pokémons</TitleCard>
                </HeaderCards>

                <ContainerCard>
                    {
                        pokemons?.map((pokemon, idx) => {
                            return PokeCard(idx, pokemon, PokemonColorBG[idx], dataAbiliti)
                        })
                    }
                </ContainerCard>

            </Main>

        </Container>
    )

}