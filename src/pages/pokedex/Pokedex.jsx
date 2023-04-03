import { useContext } from "react"
import { GlobalContext } from "../../components/context/GlobalContext"
import { Header } from '../../components/header/Header'
import Card from "../../components/pokecard/CardPokemon"
import { HeaderCards, TitleCard, ContainerCard, Container, Main } from '../../styles/styled'

export function Pokedex() {

    const context = useContext(GlobalContext)
    const { pokedex } = context

    return (
        <Container>

            <Header />

            <Main>
                <HeaderCards>
                    <TitleCard>Meus Pokémons</TitleCard>
                </HeaderCards>
                <ContainerCard>
                    {
                        pokedex?.map((pokemon, idx) =>
                            <Card key={pokemon.name} pokemon={pokemon} idx={idx} />
                        )
                    }
                </ContainerCard>
            </Main>

        </Container>
    )

}
