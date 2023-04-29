import { useContext } from "react"
import { GlobalContext } from "../../Global/GlobalStateContext"
import { Card } from "../../Components/PokemonCard/PokemonCard"
import { HeaderCards, TitleCard, ContainerCard, Container, Main } from '../../styles/styled'

export function PokedexPage() {

    const context = useContext(GlobalContext)
    const { pokedex } = context

    return (
        <Container>
            <Main>
                <HeaderCards>
                    <TitleCard>Meus Pokémons</TitleCard>
                </HeaderCards>
                <ContainerCard>
                    {
                        pokedex?.
                            sort((p1, p2) => {
                                return (p1.name > p2.name ? 1 : -1)
                            }).
                            map((pokemon, idx) =>
                                <Card key={pokemon.name} pokemon={pokemon} idx={idx} />
                            )
                    }
                </ContainerCard>
            </Main>
        </Container>
    )

}
