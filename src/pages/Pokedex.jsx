import Header from "../components/header/Header"
import { Main } from "../styles/styled"
import { Container } from "../styles/styled"
import { HeaderCards, TitleCard, ContainerCard } from '../styles/styled'
import PokeCard from '../components/pokecard/PokeCard'
import { useContext } from 'react'
import { PokedexContext } from '../components/context/PokedexContext'
import { PokemonColorBG, dataAbiliti} from '../components/constants/Constants'

export default function Pokedex() {

    const { pokedex } = useContext(PokedexContext)

    return (
        <Container>
            <Header />
            <Main>
                <HeaderCards>
                    <TitleCard>Meus Pokémons</TitleCard>
                </HeaderCards>

                <ContainerCard>
                    {
                        pokedex?.map((pokemon, idx) => {
                            return PokeCard(idx, pokemon, PokemonColorBG[idx], dataAbiliti)
                        })
                    }
                </ContainerCard>

            </Main>
        </Container>
    )
}