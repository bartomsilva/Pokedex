import styled from 'styled-components'
import { useContext } from 'react';
import { GlobalContext } from "../../components/context/GlobalContext"

const Box = styled.div`
  width: fit-content;
  height: ${({h})=>h};
  display: flex;
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
    
`
export const ImgType = styled.img`
  width: ${({h})=>h};
  z-index: 99999;
`;
export const Abiliti = styled.span`
  font-family: "Poppins";
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
`;

export function CardType(props) {

    const context = useContext(GlobalContext)

    const { h,bgc,img,imgH,text} = props
    return (
        <Box h={h} color={bgc}>
            <ImgType h={imgH} src={img} alt="" />
            <Abiliti>{context.firstLetterUpper(text)}</Abiliti>
        </Box>
    )
}


