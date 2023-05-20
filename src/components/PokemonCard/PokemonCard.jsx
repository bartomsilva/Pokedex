import axios from "axios"
import * as S from '../../Components/PokemonCard/pokemoncardStyled'
import { useNavigate, useLocation } from "react-router-dom"
import { useContext, useEffect, useState } from "react"
import { GlobalContext } from "../../Global/GlobalStateContext"
import { CardType } from "../Cardtype/CardType"
import { gotoDetail } from "../../Router/Coordination"
import { LazyLoadImage } from "react-lazy-load-image-component"
// import PlaceholderImage from "/image/no_image.png";
import { useSpeechSynthesis } from 'react-speech-kit';

export function Card(props) {
    const { speak, voices } = useSpeechSynthesis();
    const all = useSpeechSynthesis();
    const textSpeak= "Olá!,"+
    "para saber mais sobre este pokémon, clique em detalhes!"

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
        pathLastPage: ""
    }

    const [details, setDetails] = useState(detalhes_)

    const navigate = useNavigate()

    useEffect(() => {
            
        (async ()=>{
            const result = await context.getDetailPokemon(pokemon.url)
            setDetails(result) 

        })()


    }, [props, context.pokedex])

    function goDetail(props) {
        // armazena as informações necessárias para monstrar os detalhes

        //params
        context.setInfoLastPage(props)
        // vou precisar da pagina de origem da consulta dos detalhes
        gotoDetail(navigate, props.pokemon.name)
    }

    return (
        <>
            {context.isloading ?
                <S.Card>
                    <img src={context.pokeBallAnimate} alt="" />
                </S.Card>
                :
                <S.Card colorbg={details?.colorBackGround}>
                    <S.IdentificationPokemon>
                        <S.Id>{context.formatId(details?.id)}</S.Id>
                        <S.TitleCard>{details?.name}</S.TitleCard>
                    </S.IdentificationPokemon>

                    <S.ImgPokemonCard2>                    
                        <LazyLoadImage onClick={()=>speak({ text: textSpeak, voice:voices[0]})} src={details?.image}                            
                            effect="blur"
                        />
                    </S.ImgPokemonCard2>

                    <S.ImgShadowCard src={context.ballCard} alt="image background card" />
                    <S.CardTypes>
                        {details?.type1 &&
                            <CardType
                                heightCard={'31px'}
                                bgc={details?.type1Color}
                                image={details?.type1Img}
                                imageHeight={'18px'}
                                text={details?.type1} />
                        }
                        {
                            details?.type2 &&
                            <CardType
                                heightCard={'31px'}
                                bgc={details?.type2Color}
                                image={details?.type2Img}
                                imageHeight={'18px'}
                                text={details?.type2} />}
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