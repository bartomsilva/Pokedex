import { useContext, useEffect} from "react"
import { GlobalContext } from "../../components/context/GlobalContext"
import { Header } from '../../components/header/Header'
import Card from "../../components/pokecard/CardPokemon"
import { HeaderCards, TitleCard, ContainerCard, Container, Main } from '../../styles/styled'

export function Home() {

    const context = useContext(GlobalContext)
    const { pokemons } = context

    useEffect(()=>{
        context.setPokemons(context.pokemonsCopy)
    },[])
    
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
                        filter((pokemon) => context.noPokedex(pokemon.name)).
                        map((pokemon, idx) =>
                            <Card key={pokemon.name} pokemon={pokemon} idx={idx} />
                        )
                    }
                </ContainerCard>
            </Main>

        </Container>
    )

}


