import { useContext, useEffect, useState } from "react"
import { GlobalContext } from "../../components/context/GlobalContext"
import * as S from '../../components/pokecard/styledPokeCard'
import axios from "axios"

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

    useEffect(() => {
        ; (async () => {
            context.setIsLoading(true)
            try {

                context.setIsLoading(true)

                // ler dados de cada pokemon
                const getPokemon = await axios.get(pokemon.url)

                // id
                setId({id: getPokemon.data.id})

                // name
                setName({name: getPokemon.data.name})

                // imagem
                const image = getPokemon.data.sprites.other["official-artwork"].front_default;
                setImage({image: image})
                
                // // habilidades
                const abiliti1 = getPokemon.data.types[0]?.type.name;
                setType1(abiliti1)

                const abiliti2 = getPokemon.data.types[1]?.type.name;
                setType2(abiliti2)

                // buscando o objeto das habilidades
                const data1 = context.dataAbiliti.find((abiliti) => abiliti.type === abiliti1);
                setTypeImg1(data1?.img)
                setTypeColor1(data1?.bgc)                
                setVisible1(!(data1?.bgc === undefined))
                
                const data2 = context.dataAbiliti.find((abiliti) => abiliti.type === abiliti2);
                setTypeImg2(data2?.img)
                setTypeColor2(data2?.bgc)
                setVisible2(!(data2?.bgc === undefined) )
                          
                context.setIsLoading(false)

            } catch (error) {
                console.log(error)
            }
        })()

    }, [context, props, context.pokedex])

    return (
        <>
            {context.isloading ?
                <h1>Lendo...............</h1>
                :
                <S.Card colorbg={context.cardColorBG[id?.id-1]}>
                    <S.IdentificationPokemon>
                        <S.Id>{context.formatId(id?.id)}</S.Id>
                        <S.TitleCard>{context.firstLetterUpper(name?.name)}</S.TitleCard>
                    </S.IdentificationPokemon>

                    <S.ImgPokemonCard src={image?.image} alt="image pokemon" />
                    <S.ImgPokemonShadowCard src={context.ballCard} alt="image background card" />
                    <S.CardTypes>
                 
                        <S.ContainerType color={typeColor1?typeColor1:''} visible={visible1?visible1:''}>
                            <S.ImgType src={typeImg1?typeImg1:''} alt="" />
                            <S.Abiliti>{context.firstLetterUpper(type1?type1:'')}</S.Abiliti>
                        </S.ContainerType>

                        <S.ContainerType color={typeColor2?typeColor2:''} visible={visible2?setVisible2:''}>
                            <S.ImgType src={typeImg2?typeImg2:''} alt="" />
                            <S.Abiliti>{context.firstLetterUpper(type2?type2:'')}</S.Abiliti>
                        </S.ContainerType>

                    </S.CardTypes>

                    <S.CardDetail>
                        <S.Detail>Detalhes</S.Detail>
                        {
                            location.pathname === '/' ? (
                                <S.BtnCapture colorBackground={'#ffffff'} colorFont={'#0f0f0f'} 
                                 onClick={() => context.addPokedex(pokemon)}>Capturar!</S.BtnCapture>
                            ) : (
                                <S.BtnCapture colorBackground={'#ff6262'} 
                                colorFont={'#ffffff'} onClick={() => context.removePokedex(pokemon)}>Excluir</S.BtnCapture>
                            )}
                    </S.CardDetail>
                </S.Card>
            }
        </>)
}