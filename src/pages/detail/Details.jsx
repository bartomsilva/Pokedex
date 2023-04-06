import { useContext } from 'react'
import { GlobalContext } from "../../components/context/GlobalContext"

import { BoxImage, BoxStates, Container, ContainerCard, ContainerImage, DetailCard, HeaderCards, ImgBackGround, Main, SectionLeft, SectionRight, TitleCard } from '../../styles/styled'
import { Header } from '../../components/header/Header'

export function Details() {

    const context = useContext(GlobalContext)

    console.log(context.infoPokemon)

    return (
        <Container>
            <Header />
            <Main>
                <HeaderCards>
                    <TitleCard>Detalhes</TitleCard>
                </HeaderCards>
                <ContainerCard color={"#00eff2"}>
                    <DetailCard>
                        <SectionLeft>
                            <ContainerImage>
                                <BoxImage>
                                    1111111111
                                </BoxImage>
                                <BoxImage>
                                    222222222222
                                </BoxImage>
                            </ContainerImage>

                            <BoxStates>
                                DDDDDDDDDDDDDDD
                            </BoxStates>

                        </SectionLeft>

                        <SectionRight>
                            <ImgBackGround src={context.ballCard} alt="" />
                            {context.infoPokemon.name.name}
                        </SectionRight>
                    </DetailCard>
                </ContainerCard>
            </Main>
        </Container>
    )
}