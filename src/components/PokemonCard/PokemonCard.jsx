import axios from "axios"
import * as S from '../../Components/PokemonCard/pokemoncardStyled'
import { useNavigate, useLocation } from "react-router-dom"
import { useContext, useEffect, useState } from "react"
import { GlobalContext } from "../../Global/GlobalStateContext"
import { CardType } from "../Cardtype/CardType"
import { gotoDetail } from "../../Router/Coordination"

export function Card(props) {

    const context = useContext(GlobalContext)
    const location = useLocation()

    const { pokemon } = props

    let detalhes_ = {
        id: "",
        name: "",
        image: "",
        type1: "",
        type2: "",
        type1Img: "",
        type2Img: "",
        type1Color: "",
        type2Color: "",
        colorBackGround: "",
        imageFrontPokemon: "",
        imageBackPokemon: "",
        stats: [],
        moves: [],
        pathLastPage:""
    }

    const [detalhes, setDetalhes] = useState(detalhes_)

    const navigate = useNavigate()

    useEffect(() => {
        ; (async () => {
            context.setIsLoading(true)
            try {
                context.setIsLoading(true)
                
                // ler dados de cada pokemon
                const getPokemon = await axios.get(pokemon.url)
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

                detalhes_ = {
                    id: getPokemon.data.id ,
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
                    pathLastPage: location.pathname
                }
                setDetalhes(detalhes_)

                context.setIsLoading(false)

            } catch (error) {
                console.log(error)
            }
        })()

    }, [props, context.pokedex])

    function goDetail(props) {
        // armazena as informações necessárias para monstrar os detalhes
       
        //params
        context.setInfoLastPage(props)
        // vou precisar da pagina de origem da consulta dos detalhes
        gotoDetail(navigate,props.pokemon.name)
    }

    return (
        <>
            {context.isloading ?
                <S.Card>
                    <img src={context.pokeBallAnimate} alt="" />
                </S.Card>
                :
                <S.Card colorbg={detalhes.colorBackGround}>
                    <S.IdentificationPokemon>
                        <S.Id>{context.formatId(detalhes.id)}</S.Id>
                        <S.TitleCard>{context.firstLetterUpper(detalhes.name)}</S.TitleCard>
                    </S.IdentificationPokemon>

                    <S.ImgPokemonCard src={detalhes.image} />
                    <S.ImgShadowCard src={context.ballCard} alt="image background card" />
                    <S.CardTypes>
                        {detalhes.type1 &&
                            <CardType
                                heightCard={'31px'}
                                bgc={detalhes.type1Color}
                                image={detalhes.type1Img}
                                imageHeight={'18px'}
                                text={detalhes.type1} />
                        }
                        {
                            detalhes.type2 &&
                            <CardType
                                heightCard={'31px'}
                                bgc={detalhes.type2Color}
                                image={detalhes.type2Img}
                                imageHeight={'18px'}
                                text={detalhes.type2} />                        }
                    </S.CardTypes>

                    <S.CardDetail>
                        <S.Detail href="#" onClick={() => goDetail(
                            {
                                pokemon,
                                pathLastPage: location.pathname

                            })}>Detalhes</S.Detail>
                        {
                            location.pathname === '/' &&
                            <S.BtnCapture colorBackground={'#ffffff'} colorFont={'#0f0f0f'}
                                onClick={() => context.addPokemonPokedex(pokemon)}>Capturar!</S.BtnCapture>
                        }
                        {
                            location.pathname === '/pokedex' &&
                            <S.BtnCapture colorBackground={'#ff6262'} colorFont={'#ffffff'}
                                onClick={() => context.removePokemonPokedex(pokemon)}>Excluir</S.BtnCapture>
                        }
                    </S.CardDetail>
                </S.Card>
            }
        </>)
}