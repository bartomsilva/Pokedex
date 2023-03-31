
import { useEffect, useState } from "react"
import styled from "styled-components"
import axios from "axios"
import ballCard from '../../assets/BallCard.svg'
import { Container } from "../../pages/Home"

export const Card = styled.div`
    width: 420px;
    height: 210px;    
    position: relative;
    background-color: ${({ colorbg }) => colorbg};
    color: #fff;
    padding-left: 25px;
    padding-right: 25px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    p{
        margin-top: 20px;
    }


`
export const ImgPokemonCard = styled.img`
    position: absolute;
    height: 190px ;
    top: -93px;
    right: 5px;       
    z-index: 100; 
    filter: contrast(90%); 
    /* filter: opacity(80%) */
    /* filter: hue-rotate(80%); */
    /* filter: saturate(200%) grayscale(50%);   */

`

export const ImgPokemonShadowCard = styled.img`
    position: absolute;
    height: 180px ;
    top: 0px;
    right: 5px;        

`


export const TitleCard = styled.p`
        font-family: 'Inter', sans-serif;
        font-size: 28px;
        color: #fff;

`

export const CardTypes = styled.div`
    position: absolute;
    top: 100px;
    display: flex;
    width: fit-content;
    gap: 15px;
    
    /* button{
        width: fit-content;
        padding: 5px 25px;
        border: 1px dashed rgba(255, 255, 255, 0.47);
        border-radius: 8px;

    } */

`

export const ContainerType = styled.div`
    width: fit-content;
    height: 31px;
    display: flex;
    justify-content: space-between;
    gap: 10px;
    padding: 5px;
    border: 1px dashed rgba(255, 255, 255, 0.47);
    border-radius: 8px;
    background-color: ${({color}) => color }; 
`

export const CardDetail = styled.div`
    width: 100%;
    height: 50px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-bottom: 30px;
    
    a{
        text-decoration: underline;
        cursor: pointer;
    }

    
`
export const BtnCapture = styled.button`
        width: 150px;
        height: 40px;
        background: #FFFFFF;
        border: none;
        border-radius: 8px;
        font-family: 'Poppins';
        font-style: normal;
        font-weight: 400;
        z-index: 999999;
        cursor: pointer;
`
    
    
export const ImgType = styled.img`
    /* position: absolute; */
    width: 18px;
    z-index:9999999;
`

export default function PokeCard(key, char, colorbg, imageAbility) {

    const [id, setId] = useState({ id: "" })
    const [imageFront, setImageFront] = useState({ image: "" })
    const [types, setTypes] = useState({ type1: "", type2: "" })
    const [imgAbility, setImgAbility] = useState({ ìmg1: null, img2: null, color1: null, color2: null })

    function formatId(id) {
        id = id.toString()
        if (id.length === 1) {
            return '#0' + id
        }
        return "#" + id
    }
      
    function loadDeatail(url) {

        (async () => {

            try {
                const response = await axios.get(url)
                const image = response.data.sprites.other.home.front_default
                const ability1 = response.data.types[0]?.type.name
                const ability2 = response.data.types[1]?.type.name
                const data1 = imageAbility.find(ab => ab.type === ability1)
                const data2 = imageAbility.find(ab => ab.type === ability2)

                setId({ id: formatId(response.data.id) })

                setImageFront({
                    image: image
                })
                setTypes({
                    type1: ability1,
                    type2: ability2
                })

                setImgAbility({
                    img1: data1?.img,
                    img2: data2?.img,
                    color1: data1?.bgc,
                    color2: data2?.bgc
                })

            }
            catch (error) {
                console.log("ocorreu um erro: " + error);
            };
        })()

    }
    useEffect(() => {
        loadDeatail(char.url)
    }, [])

    return (
        <Card key={key} colorbg={colorbg}>
            <div>
                <p>{id?.id}</p>
                <TitleCard>{char.name}</TitleCard>
            </div>

            <ImgPokemonCard src={imageFront.image} alt="image pokemon" />
            <ImgPokemonShadowCard src={ballCard} alt="image background card" />

            <CardTypes>
                <ContainerType color={imgAbility?.color1}>
                    <ImgType src={imgAbility?.img1} alt="" />
                    {types.type1}
                </ContainerType>
                <ContainerType color={imgAbility?.color2}>
                    <ImgType src={imgAbility?.img2} alt="" />
                    {types.type2}
                </ContainerType>
            </CardTypes>

            <CardDetail>
                <a>Detalhes</a>
                <BtnCapture onClick={()=>alert("30% feito!")}>Capturar!</BtnCapture>
            </CardDetail>
        </Card>
    )

}