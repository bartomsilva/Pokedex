import { useContext } from "react"
import { GlobalContext } from "../../Global/GlobalStateContext"
import { Header } from '../../Components/Header/Header'
import Card from "../../Components/PokemonCard/PokemonCard"
import { HeaderCards, TitleCard, ContainerCard, Container, Main } from '../../styles/styled'

export function Pokedex() {

    const context = useContext(GlobalContext)
    const { pokemons } = context

    return (
        <Container>
            <Header />
            <Main>
                <HeaderCards>
                    <TitleCard>Meus Pokémons</TitleCard>
                </HeaderCards>
                <ContainerCard>
                    {
                        pokemons?.
                            filter((pokemon) => pokemon.isPokedex).
                            map((pokemon, idx) =>
                                <Card key={pokemon.name} pokemon={pokemon} idx={idx} />
                            )
                    }
                </ContainerCard>
            </Main>
        </Container>
    )

}
