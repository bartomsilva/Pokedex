import { useContext } from 'react';
import { GlobalContext } from "../../Global/GlobalStateContext"
import * as S from './cardtypeStyled'

// card dos tipos do pokemon
export function CardType(props) {
    const context = useContext(GlobalContext)
    const { heightCard,bgc,image,imageHeight,text} = props
    return (
        <S.Box h={heightCard} color={bgc}>
            <S.ImgType h={imageHeight} src={image} alt="" />
            <S.Abiliti>{context.firstLetterUpper(text)}</S.Abiliti>
        </S.Box>
    )
}


