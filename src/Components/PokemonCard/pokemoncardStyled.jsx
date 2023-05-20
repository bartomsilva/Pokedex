import styled, {keyframes} from "styled-components";
import { pulse } from '../../Global/GlobalEffetsStyled'

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
  width: 200px;
`

export const Id = styled.p`
  margin-top: 18px;
  font-family: "Inter";
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
`;
// export const ImgPokemonCard = styled.img`
//   position: absolute;
//   height: 190px;
//   top: -60px;
//   right: 5px;
//   z-index: 100;

//   /* @media(max-width:480px){
//     height: 120px; // 170
//     top: -50px;
//     border: 5px solid red; 
//   } */

// `;

export const ImgPokemonCard2 = styled.div`
  position: absolute;
  height: 190px;
  top: -60px;
  right: 5px;
  z-index: 100;
  img{ 
    height: 190px;
    :hover{
      cursor: pointer;
      animation: ${pulse} 600ms linear infinite;
    }
    @media(max-width:480px){
      margin-top: 20px;
      height: 120px; // 170
      top: 0;
    }
  }

`;

export const ImgShadowCard = styled.img`
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
  font-size: 20px; 
  color: #fff;
  ::first-letter{
    text-transform: uppercase;
  }
  @media(max-width:480px){
    font-size: 18px;
  } 
  
`;

export const CardTypes = styled.div`
  position: absolute;
  top: 85px;
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
  color: #fff;
  position: absolute;
  bottom: 29px;
  left: 25px;
  cursor: pointer;

`;

export const BtnCapture = styled.button`
  width: 146px;
  height: 38px;
  background: ${({ colorBackground }) => colorBackground};
  color: ${({ colorFont }) => colorFont};
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
  transition-duration: 300ms;
  &:active{
    transform: scale(0.94);
  }
  &:hover{
    /* transform: scale(1.1); */
    color: ${({ colorBackground }) => colorBackground};
    background-color: ${({ colorFont }) => colorFont};
  }
`;

export const ImgType = styled.img`
  width: 18px;
  z-index: 99999;
`;

export const Abiliti = styled.span`
  font-family: "Poppins";
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
`;
