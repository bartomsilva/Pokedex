import { useContext } from 'react'
import { GlobalContext } from "../../components/context/GlobalContext"
import {
    BoxImage, BoxMoves, BoxStats,
    Container, ContainerCard,
    ContainerImage, ContainerTypes, DetailCard,
    DetailId,
    DetailName,
    HeaderCards, ImgBackGround,
    ImgPokemon, Main, Move, Moves, SectionLeft,
    SectionRight, Stats, StatsBar, StatsName, StatsVal, TitleCard, TitleInfo
} from '../../styles/styled'

import { Header } from '../../components/header/Header'
import { CardType } from '../../components/cardType/CartType'

export function Details() {

    const context = useContext(GlobalContext)

    function correctState(name) {
        if (name === "special-attack") {
            return "Sp. Atk"
        }
        if (name === "special-defense") {
            return "Sp. Def"
        }
        return context.firstLetterUpper(name)
    }

console.log(context.infoPokemon)
    return (
        <Container>

            <Header />
            <Main>
                <HeaderCards>
                    <TitleCard>Detalhes</TitleCard>
                </HeaderCards>
                <ContainerCard>
                    <DetailCard color={context.infoPokemon?.colorBackGround}>
                        <SectionLeft>
                            <ContainerImage>
                                <BoxImage>
                                    <img src={context.infoPokemon?.imgFront} alt="" />
                                </BoxImage>
                                <BoxImage>
                                    <img src={context.infoPokemon?.imgBack} alt="" />
                                </BoxImage>
                            </ContainerImage>
                            <BoxStats>
                                <TitleInfo>Base stats</TitleInfo>
                                <Stats>                                    {
                                    context.infoPokemon.stats.map((stats, index) =>
                                        <>
                                            <StatsName key={stats.stat.name}>{correctState(stats.stat.name)}</StatsName>
                                            <StatsVal key={index}>{stats.base_stat}</StatsVal>
                                            <StatsBar key={index + stats.base_stat*2} w={stats.base_stat}></StatsBar>
                                        </>
                                    )
                                }
                                </Stats>
                            </BoxStats>
                        </SectionLeft>
                        <SectionRight>
                            <DetailId>{context.formatId(context.infoPokemon?.id)}</DetailId>
                            <DetailName>{context.firstLetterUpper(context.infoPokemon?.name)}</DetailName>
                            <ImgBackGround src={context.ballCard} alt="" />
                            <ImgPokemon src={context.infoPokemon?.image} alt="" />
                            <ContainerTypes>
                                <CardType h={'31px'}
                                    bgc={context.infoPokemon?.typeColor1}
                                    img={context.infoPokemon?.typeImg1}
                                    imgH={'18px'}
                                    text={context.infoPokemon?.type1} />
                                {
                                    context.infoPokemon?.visible2 ?
                                    <CardType h={'31px'}
                                    bgc={context.infoPokemon?.typeColor2}
                                    img={context.infoPokemon?.typeImg2}
                                    imgH={'18px'}
                                    text={context.infoPokemon?.type2} />:""
                                }
                            </ContainerTypes>
                            <BoxMoves>
                                <TitleInfo>Moves</TitleInfo>
                                <Moves>
                                {
                                    context.infoPokemon.moves.map((moves, index) =>
                                            <Move key={index}>{moves.move.name}</Move>
                                      
                                    )
                                }
                                </Moves>
                            </BoxMoves>
                        </SectionRight>
                    </DetailCard>
                </ContainerCard>
            </Main>

        </Container>
    )
}