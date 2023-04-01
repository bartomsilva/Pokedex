import { useEffect, useState } from "react";
import { useLocation, useNavigate } from 'react-router-dom';
import styled from "styled-components";
import axios from "axios";

import ballCard from "../../assets/BallCard.svg";

export const Card = styled.div`
  width: 420px;
  height: 210px;
  min-width: 335px;
  position: relative;
  background-color: ${({ colorbg }) => colorbg};
  color: #fff;
  padding-left: 18px;
  padding-right: 25px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  border-radius: 12px;
  @media(max-width:480px){
    width: 100vw;
  }
`;

export const IdentificationPokemon = styled.div`
  width: 100%;
`

export const Id = styled.p`
  margin-top: 18px;
  font-family: "Inter";
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
`;
export const ImgPokemonCard = styled.img`
  position: absolute;
  height: 190px;
  top: -60px;
  right: 5px;
  z-index: 100;
  @media(max-width:480px){
    height: 170px;
    top: -50px;

  }
  /* visibility: hidden; */

`;

export const ImgPokemonShadowCard = styled.img`
  position: absolute;
  width: 220px;
  height: 230px;
  top: 0;
  right: 2px;
  @media(max-width:480px){
    width: 200px;
    height: 200px;
    overflow: hidden;

  }
`;

export const TitleCard = styled.p`
  font-family: "Inter";
  font-style: normal;
  font-weight: 700;
  font-size: 32px;
  color: #fff;
  @media(max-width:480px){
    font-size: 26px;
  } 
  
`;

export const CardTypes = styled.div`
  position: absolute;
  top: 100px;
  top: 80px;
  display: flex;
  width: fit-content;
  gap: 8px;
  @media(max-width:480px){
    flex-direction: column;
  }
`;

export const ContainerType = styled.div`
  width: fit-content;
  height: 31px;
  display: ${({ visible }) => (visible ? "flex" : "none")};
  justify-content: space-between;
  align-items: center;
  gap: 18px;
  padding: 0 6px;
  border: 1px dashed rgba(255, 255, 255, 0.47);
  border-radius: 8px;
  background-color: ${({ color }) => color};
  font-family: "Poppins";
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  
`;

export const CardDetail = styled.div`
  width: 100%;
  height: 50px;
`;

export const Detail = styled.a`
  font-family: "Poppins";
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  text-decoration: underline;
  cursor: pointer;
  color: #fff;
  position: absolute;
  bottom: 29px;
  left: 25px;
`;
export const BtnCapture = styled.button`
  width: 146px;
  height: 38px;
  background: #ffffff;
  border: none;
  border-radius: 8px;
  font-family: "Poppins";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  z-index: 999999;
  cursor: pointer;
  position: absolute;
  right: 16px;
  bottom: 22px;
`;

export const ImgType = styled.img`
  width: 18px;
  z-index: 9999999;
`;

export const Abiliti = styled.span`
  font-family: "Poppins";
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
`;

export default function PokeCard(key, char, colorbg, dataAbiliti) {
  const [id, setId] = useState({ id: "" });
  const [imageFront, setImageFront] = useState({ image: "" });
  const [types, setTypes] = useState({ type1: "", type2: "" });
  const [abilities, setabilities] =
    useState({
      ìmg1: null, img2: null,
      color1: null, color2: null,
      visible1: true, visible2: true,
    });

  function formatId(id) {
    id = id.toString();
    if (id.length === 1) {
      return "#0" + id;
    }
    return "#" + id;
  }

  const location = useLocation()
  const navigate = useNavigate()

  // função para deixar a primeira letra maiuscula
  function firstLetterUpper(text) {
    if (!text) return "";
    text = text.toLowerCase();
    return text[0].toUpperCase() + text.substring(1);
  }

  function loadDeatail(url) {

    (async () => {
      try {
        // lendo a dados do pokemon
        const response = await axios.get(url);
        // pegando a imagem de frente
        const image = response.data.sprites.other["official-artwork"].front_default;

        // pegando as habilidades
        const abiliti1 = response.data.types[0]?.type.name;
        const abiliti2 = response.data.types[1]?.type.name;

        // buscando o objeto das habilidades
        const data1 = dataAbiliti.find((abiliti) => abiliti.type === abiliti1);
        const data2 = dataAbiliti.find((abiliti) => abiliti.type === abiliti2);

        // corigindo o id para o formato #01
        setId({ id: formatId(response.data.id) });

        // salvando a imagem no estado
        setImageFront({
          image: image,
        });

        //salvando as habilidades no estado
        // junta no mesmo objeto???
        setTypes({
          type1: abiliti1,
          type2: abiliti2,
        });

        //salvando a imagem e cor no estado
        setabilities({
          img1: data1?.img,
          img2: data2?.img,
          color1: data1?.bgc,
          color2: data2?.bgc,
          visible1: !(data1?.bgc === undefined),
          visible2: !(data2?.bgc === undefined),
        });
      } catch (error) {
        console.log("ocorreu um erro: " + error);
      }
    })();
  }
  useEffect(() => {
    loadDeatail(char.url);
  }, []);

  return (
    <Card key={key} colorbg={colorbg}>

      <IdentificationPokemon>
        <Id>{id?.id}</Id>
        <TitleCard>{firstLetterUpper(char.name)}</TitleCard>
      </IdentificationPokemon>

      <ImgPokemonCard src={imageFront.image} alt="image pokemon" />
      <ImgPokemonShadowCard src={ballCard} alt="image background card" />

      <CardTypes>

        <ContainerType color={abilities?.color2} visible={abilities.visible2}>
          <ImgType src={abilities?.img2} alt="" />
          <Abiliti>{firstLetterUpper(types?.type2)}</Abiliti>
        </ContainerType>

        <ContainerType color={abilities?.color1} visible={abilities.visible1}>
          <ImgType src={abilities?.img1} alt="" />
          <Abiliti>{firstLetterUpper(types.type1)}</Abiliti>
        </ContainerType>

      </CardTypes>

      <CardDetail>
        <Detail>Detalhes</Detail>
        {
          location.pathname==='/'? 
          <BtnCapture onClick={() => alert("Capturado")}>Capturar!</BtnCapture>
          :
          <BtnCapture onClick={() => alert("Excluido")}>Excluir!</BtnCapture>

        }
      </CardDetail>

    </Card>
  );
}
