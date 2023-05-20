import axios from 'axios'
import { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { GlobalContext } from "../../Global/GlobalStateContext"
import { BASE_URL } from '../../Constants/Constants'
import {
    Container, ContainerCard,
    ContainerTypes, HeaderCards, ImageWaitLoadingData,
    Main, TitleCard,
} from '../../styles/styled'

import {
    ImgBackGroundCardDetail, BoxMoves, BoxStats, BoxImage,
    ContainerImage, DetailCard, DetailId,
    DetailName, SectionLeft, SectionRight,
    Stats, StatsBar, StatsName, StatsVal,
    TitleInfo, Moves, Move, ImgPokemonDetail, ImageBackDetail
} from './PokmonDetailsStyled'

import { CardType } from '../../Components/Cardtype/CardType'

export function PokemonDetailPage() {

    const [detailsPokemon, setDetailsPokemon] = useState()
    const context = useContext(GlobalContext)
    
    const params = useParams()
    
    useEffect(() => {
        (async () => {
            const URL = BASE_URL + params?.namePokemon
            setDetailsPokemon(await context.getDetailPokemon(URL))
        })()
    }, [])

    let statsTotal = 0

    function correctNameState(name) {
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
        return (<section key={index}>
            <Stats>
                <StatsName >{correctNameState(stats.stat.name)}</StatsName>
                <StatsVal>{stats.base_stat}</StatsVal>
                <StatsBar w={stats.base_stat}
                    color={correctNameState(stats.stat.name).includes("Sp.") ? "orange" : "red"}></StatsBar>
            </Stats>
        </section>)
    }

    return (
        <Container >
            <Main>
                <HeaderCards>
                    <TitleCard>Detalhes</TitleCard>
                </HeaderCards>
                {context.isLoading &&
                    <ContainerCard>
                        <ImageWaitLoadingData src="https://i.gifer.com/5IPv.gif" alt="" />
                    </ContainerCard>
                }
                {
                    !context.isLoading &&
                    <ContainerCard className="animate__animated animate__backInRight">
                        <DetailCard color={detailsPokemon?.colorBackGround}>
                            <ImageBackDetail src={'/image/ballBackDetail.svg'}></ImageBackDetail>
                            <SectionLeft>
                                <ContainerImage>
                                    <BoxImage>
                                        <img src={detailsPokemon?.imageFrontPokemon || context.noImage} alt="" />
                                    </BoxImage>
                                    <BoxImage>
                                        <img src={detailsPokemon?.imageBackPokemon || context.noImage} alt="" />
                                    </BoxImage>
                                </ContainerImage>
                                <BoxStats>
                                    <TitleInfo>Base stats</TitleInfo>
                                    <>
                                        {
                                            detailsPokemon?.stats.map((stats, index) =>
                                                renderStats(stats, index))
                                        }
                                    </>
                                    <Stats total={true}>
                                        <StatsName>Total:</StatsName>
                                        <StatsVal bold={true}>{statsTotal}</StatsVal>
                                    </Stats>
                                </BoxStats>
                            </SectionLeft>

                            <SectionRight>
                                <DetailId>{context.formatId(detailsPokemon?.id)}</DetailId>
                                <DetailName>{detailsPokemon?.name}</DetailName>
                                <ImgBackGroundCardDetail src={'/image/pngwing2.svg'} alt="" />
                                <ImgPokemonDetail src={detailsPokemon?.image} alt="" />
                                <ContainerTypes>
                                    <CardType
                                        heightCard={'31px'}
                                        widthCard={'91px'}
                                        bgc={detailsPokemon?.type1Color}
                                        image={detailsPokemon?.type1Img}
                                        imageHeight={'18px'}
                                        text={detailsPokemon?.type1} />
                                    {
                                        detailsPokemon?.type2 ?
                                            <CardType
                                                heightCard={'31px'}
                                                widthCard={'91px'}
                                                bgc={detailsPokemon?.type2Color}
                                                image={detailsPokemon?.type2Img}
                                                imageHeight={'18px'}
                                                text={detailsPokemon?.type2} /> : ""
                                    }
                                </ContainerTypes>
                                <BoxMoves>
                                    <TitleInfo>Moves</TitleInfo>
                                    <Moves>
                                        {
                                            detailsPokemon?.moves.map((moves, index) =>
                                                <Move key={index}>{moves.move.name}</Move>
                                            )
                                        }
                                    </Moves>
                                </BoxMoves>
                            </SectionRight>
                        </DetailCard>
                    </ContainerCard>
                }
            </Main>
        </Container>
    )
}