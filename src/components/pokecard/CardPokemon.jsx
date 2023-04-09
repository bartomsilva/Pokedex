import { useContext, useEffect, useState } from "react"
import { GlobalContext } from "../../components/context/GlobalContext"
import * as S from '../../components/pokecard/styledPokeCard'
import axios from "axios"
import { useNavigate } from "react-router-dom"
import { CardType } from "../cardType/CartType"

export default function Card(props) {

    const context = useContext(GlobalContext)

    const { pokemon } = props

    const [id, setId] = useState()
    const [name, setName] = useState()
    const [image, setImage] = useState()
    const [type1, setType1] = useState([])
    const [type2, setType2] = useState([])
    const [typeImg1, setTypeImg1] = useState()
    const [typeImg2, setTypeImg2] = useState()
    const [typeColor1, setTypeColor1] = useState()
    const [typeColor2, setTypeColor2] = useState()
    const [visible1, setVisible1] = useState()
    const [visible2, setVisible2] = useState()
    const [colorBackGround, setColorBackGround] = useState({ color: "" })
    const [imageFrontPokemon, setImageFrontPokemon] = useState('')
    const [imageBackPokemon, setImageBackPokemon] = useState('')
    const [stats, setStats] = useState()
    const [moves, setMoves] = useState()

    const navigate = useNavigate()

    useEffect(() => {
        ; (async () => {
            context.setIsLoading(true)
            try {

                context.setIsLoading(true)

                // ler dados de cada pokemon
                const getPokemon = await axios.get(pokemon.url)

                // id
                setId({ id: getPokemon.data.id })

                // name
                setName({ name: getPokemon.data.name })

                // imagem Destaque
                const image_ = getPokemon.data.sprites.other["official-artwork"].front_default;
                setImage({ image: image_ })

                // imagens para os detelhes
                setImageFrontPokemon(getPokemon.data.sprites.front_default)
                setImageBackPokemon(getPokemon.data.sprites.back_default)

                // // habilidades
                const abiliti1 = getPokemon.data.types[0]?.type.name;
                setType1(abiliti1)

                const abiliti2 = getPokemon.data.types[1]?.type.name;
                setType2(abiliti2)

                // objeto das habilidades
                const data1 = context.dataAbiliti.find((abiliti) => abiliti.type === abiliti1);
                setTypeImg1(data1?.img)
                setTypeColor1(data1?.bgc)
                setVisible1(!(data1?.bgc === undefined))

                const data2 = context.dataAbiliti.find((abiliti) => abiliti.type === abiliti2);
                setTypeImg2(data2?.img)
                setTypeColor2(data2?.bgc)
                setVisible2(!(data2?.bgc === undefined))

                // cor de fundo do card
                setColorBackGround({ color: data1?.colorCard })

                // status do pokémon
                setStats(getPokemon.data.stats)

                // movimento do pokémon
                setMoves(getPokemon.data.moves.filter( (m,index) => index <=3))

                // carrega a cor oficial - não utilizada no projeto da Labenu
                // const urlColor = "https://pokeapi.co/api/v2/pokemon-species/"+getPokemon.data.id+"/"
                // const getColorPokemon = await axios.get(urlColor)
                // setColorBackGround({color:getColorPokemon.data.color.name})

                // console.log(getPokemon.data)
                context.setIsLoading(false)

            } catch (error) {
                console.log(error)
            }
        })()

    }, [props, context.pokedex])

    function goDetail(props) {
        context.setInfoPokemon(props)
        navigate('/details')
    }

    return (
        <>
            {context.isloading ?
                <S.Card>
                    <h1>Lendo......</h1>
                </S.Card>
                :
                //  <S.Card colorbg={context.oficialColor(colorBackGround?.color)}> 
                <S.Card colorbg={colorBackGround?.color}>
                    <S.IdentificationPokemon>
                        <S.Id>{context.formatId(id?.id)}</S.Id>
                        <S.TitleCard>{context.firstLetterUpper(name?.name)}</S.TitleCard>
                    </S.IdentificationPokemon>

                    <S.ImgPokemonCard src={image?.image} />
                    <S.ImgPokemonShadowCard src={context.ballCard} alt="image background card" />
                    <S.CardTypes>
                        <CardType h={'31px'}
                            bgc={typeColor1}
                            img={typeImg1}
                            imgH={'18px'}
                            text={type1} />
                        {
                            visible2
                                ? (
                                    <CardType h={'31px'}
                                        bgc={typeColor2}
                                        img={typeImg2}
                                        imgH={'18px'}
                                        text={type2} />)
                                : ("")
                        }
                    </S.CardTypes>
                    <S.CardDetail>
                        <S.Detail href="#" onClick={() => goDetail(
                            {
                                id: id.id,
                                name: name.name,
                                image: image.image,
                                imgFront: imageFrontPokemon,
                                imgBack: imageBackPokemon,
                                type1,
                                typeImg1,
                                typeColor1,
                                visible1,
                                type2,
                                typeImg2,
                                typeColor2,
                                visible2,
                                stats: stats,
                                moves: moves,
                                colorBackGround: colorBackGround.color,
                                inPokedex: location.pathname === "/pokedex"
                            })}>Detalhes</S.Detail>
                        {
                            location.pathname === '/' ? (
                                <S.BtnCapture colorBackground={'#ffffff'} colorFont={'#0f0f0f'}
                                    onClick={() => context.addPokedex(pokemon)}>Capturar!</S.BtnCapture>
                            ) :
                                location.pathname === '/pokedex' ? (
                                    <S.BtnCapture colorBackground={'#ff6262'}
                                        colorFont={'#ffffff'} onClick={() => context.removePokedex(pokemon)}>Excluir</S.BtnCapture>
                                )
                                    : ""
                        }
                    </S.CardDetail>
                </S.Card>
            }
        </>)
}