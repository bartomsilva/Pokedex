import { useContext } from "react"
import { GlobalContext } from "../../Global/GlobalStateContext"
import { Header } from '../../Components/Header/Header'
import Card from "../../Components/PokemonCard/PokemonCard"
import { HeaderCards, TitleCard, ContainerCard, Container, Main } from '../../styles/styled'
import { Footer } from "../../Components/Footer/Footer"

export function Home() {

    const context = useContext(GlobalContext)
    const { pokemons } = context

    return (
        <Container>
            <Header />
            <Main>
                <HeaderCards>
                    <TitleCard>Todos Pokémons</TitleCard>
                </HeaderCards>
                <ContainerCard>
                    {
                        pokemons?.
                        filter( pokemon => context.noPokedex(pokemon.name)).map( (pokemon,index) =>
                                <Card key={pokemon.name} pokemon={pokemon} idx={index} />
                            )
                    }
                </ContainerCard>
            </Main>
            <Footer/>
        </Container>
    )

}


