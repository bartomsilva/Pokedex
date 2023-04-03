import { useContext, useEffect, useState } from "react"
import { useLocation, useNavigate } from "react-router-dom"
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
                            <Card pokemon={pokemon} idx={idx} />
                        )
                    }
                </ContainerCard>

            </Main>

        </Container>
    )

}
