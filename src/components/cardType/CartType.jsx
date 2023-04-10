import { useContext } from 'react';
import { GlobalContext } from "../context/GlobalContext"
import * as S from './styledCardtype'


// card dos tipos do pokemon
export function CardType(props) {
    const context = useContext(GlobalContext)
    const { h,bgc,img,imgH,text} = props
    return (
        <S.Box h={h} color={bgc}>
            <S.ImgType h={imgH} src={img} alt="" />
            <S.Abiliti>{context.firstLetterUpper(text)}</S.Abiliti>
        </S.Box>
    )
}


