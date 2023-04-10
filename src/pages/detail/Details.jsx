import { useContext, useEffect, useState } from 'react'
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
import { CardType } from '../../components/cardtype/CartType'

export function Details() {

    const context = useContext(GlobalContext)
    let statsTotal = 0

    function correctState(name) {
        if (name === "special-attack") {
            return "Sp. Atk"
        }
        if (name === "special-defense") {
            return "Sp. Def"
        }
        return context.firstLetterUpper(name)
    }

    function renderStats(stats, index) {
        statsTotal += stats.base_stat
        return (<Stats key={index}>
            <StatsName >{correctState(stats.stat.name)}</StatsName>
            <StatsVal>{stats.base_stat}</StatsVal>
            <StatsBar w={stats.base_stat}></StatsBar>
        </Stats>)
    }
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
                                <>
                                    {
                                        context.infoPokemon.stats.map((stats, index) =>
                                            renderStats(stats, index))
                                    }
                                </>
                                <Stats>
                                    <StatsName>Total:</StatsName>
                                    <StatsVal bold={true}>{statsTotal}</StatsVal>
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
                                            text={context.infoPokemon?.type2} /> : ""
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