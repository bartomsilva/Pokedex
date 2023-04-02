import { useContext, useEffect} from 'react'
import PokeCard from '../components/pokecard/PokeCard'
import { PokedexContext } from '../components/context/PokedexContext'
import Header from '../components/header/Header'
import { Container } from '../styles/styled'
import { Main } from '../styles/styled'
import { HeaderCards, TitleCard, ContainerCard } from '../styles/styled'
import { PokemonColorBG, dataAbiliti } from '../components/constants/Constants'


export default function Home() {

    const { validPokemons } = useContext(PokedexContext)
    const { setValidPokemons } = useContext(PokedexContext)
    const { pokemons } = useContext(PokedexContext)
    const { pokedex } = useContext(PokedexContext)

    // pega os pokemons que não estão na pokedex

  

    return (
        <Container>

            <Header />

            <Main>

                <HeaderCards>
                    <TitleCard>Todos Pokémons</TitleCard>
                </HeaderCards>

                <ContainerCard>
                    {
                        // pokemons?.filter( poke => findPokemon(poke.name)).map((pokemon, idx) => {
                        validPokemons?.map((pokemon, idx) => {
                            return PokeCard(idx + "h", pokemon, PokemonColorBG[idx], dataAbiliti)
                        })
                    }
                </ContainerCard>

            </Main>

        </Container>
    )

}