import axios from 'axios'
import { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { GlobalContext } from "../../Global/GlobalStateContext"
import { BASE_URL } from '../../Constants/Constants'
import {
    BoxImage, BoxMoves, BoxStats,
    Container, ContainerCard,
    ContainerImage, ContainerTypes, DetailCard,
    DetailId, DetailName, HeaderCards, ImageWaitLoadingData, ImgBackGround,
    ImgPokemon, Main, Move, Moves, SectionLeft,
    SectionRight, Stats, StatsBar, StatsName, StatsVal, TitleCard, TitleInfo
} from '../../styles/styled'

import { Header } from '../../Components/Header/Header'
import { CardType } from '../../Components/Cardtype/CardType'

export function PokemonDetailPage() {

    const [detailsPokemon, setDetailsPokemon] = useState()

    const context = useContext(GlobalContext)
    const params = useParams()

    const loadDetail = async (namePokemon) => {
        const URL = BASE_URL + namePokemon
        context.setIsLoading(true)
        try {
            context.setIsLoading(true)
            // ler dados de cada pokemon
            const getPokemon = await axios.get(URL)
            let image_Pokemon = context.noImage

            image_Pokemon = getPokemon.data.sprites.other["official-artwork"].front_default
                ? getPokemon.data.sprites.other["official-artwork"].front_default
                : image_Pokemon

            // // habilidades
            const abiliti1 = getPokemon.data.types[0]?.type.name;
            const abiliti2 = getPokemon.data.types[1]?.type.name;

            // objeto das habilidades ( imagem e cor do card)
            const data1 = context.dataAbiliti.find((abiliti) => abiliti.type === abiliti1);
            const data2 = context.dataAbiliti.find((abiliti) => abiliti.type === abiliti2);

            const detalhes_ = {
                id: getPokemon.data.id,
                name: getPokemon.data.name,
                image: image_Pokemon,
                type1: getPokemon.data.types[0]?.type.name,
                type2: getPokemon.data.types[1]?.type.name,
                type1Img: data1?.img,
                type2Img: data2?.img,
                type1Color: data1?.bgc,
                type2Color: data2?.bgc,
                colorBackGround: data1?.colorCard,
                imageFrontPokemon: getPokemon.data.sprites.front_default,
                imageBackPokemon: getPokemon.data.sprites.back_default,
                stats: getPokemon.data.stats,
                moves: getPokemon.data.moves.filter((m, index) => index <= 3),
            }
            setDetailsPokemon(detalhes_)

            context.setIsLoading(false)

        } catch (error) {
            console.log(error)
        }
    }
    useEffect(() => {
        loadDetail(params.namePokemon)
    }, [])


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
            <StatsBar w={stats.base_stat}
                color={correctState(stats.stat.name).includes("Sp.") ? "orange" : "red"}></StatsBar>
        </Stats>)
    }

    return (
        <Container >
            <Header />
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
                            <SectionLeft>
                                <ContainerImage>
                                    <BoxImage>
                                        <img src={detailsPokemon?.imageFrontPokemon} alt="" />
                                    </BoxImage>
                                    <BoxImage>
                                        <img src={detailsPokemon?.imageBackPokemon} alt="" />
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
                                    <Stats>
                                        <StatsName>Total:</StatsName>
                                        <StatsVal bold={true}>{statsTotal}</StatsVal>
                                    </Stats>
                                </BoxStats>
                            </SectionLeft>
                            <SectionRight>
                                <DetailId>{context.formatId(detailsPokemon?.id)}</DetailId>
                                <DetailName>{context.firstLetterUpper(detailsPokemon?.name)}</DetailName>
                                <ImgBackGround src={context.ballCard} alt="" />
                                <ImgPokemon src={detailsPokemon?.image} alt="" />
                                <ContainerTypes>
                                    <CardType
                                        heightCard={'31px'}
                                        bgc={detailsPokemon?.type1Color}
                                        image={detailsPokemon?.type1Img}
                                        imageHeight={'18px'}
                                        text={detailsPokemon?.type1} />
                                    {
                                        detailsPokemon?.type2 ?
                                            <CardType
                                                height={'31px'}
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