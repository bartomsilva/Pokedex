import { useContext } from "react"
import { GlobalContext } from "../../Global/GlobalStateContext"
import { useLocation } from 'react-router-dom'
import * as S from './FooterStyled'


export function Footer() {

    const context = useContext(GlobalContext)
    const location = useLocation()

    let url = "https://pokeapi.co/api/v2/pokemon/?offset=xx&limit=20"

    function nextListPokemons(pageDirection) {
        const lastPage = (64 * 20)
        const xoffset = context.offset
        let newUrl = ""
        switch (pageDirection) {
            case "next":
                if (xoffset + 20 <= lastPage) {
                    context.setOffset(prevState => prevState + 20)
                    newUrl = url.replace("offset=xx", "offset=" + (xoffset + 20))
                }
                break
            case "prev":
                if (xoffset - 20 >= 0) {
                    context.setOffset(prevState => prevState - 20)
                    newUrl = url.replace("offset=xx", "offset=" + (xoffset - 20))
                }
                break
            case "first":
                context.setOffset(0)
                newUrl = url.replace("offset=xx", "offset=0")
                break
            case "last":
                context.setOffset(lastPage)
                newUrl = url.replace("offset=xx", "offset=" + lastPage)
                break
        }
        newUrl && context.loadData(newUrl)
    }

    return (

        location.pathname === "/" && (
            <S.ContainerFooter>
                <S.ContainerButtons>
                    <S.ButtonFirstPage onClick={() => nextListPokemons("first")}></S.ButtonFirstPage>
                    <S.ButtonPrevPage onClick={() => nextListPokemons("prev")} ></S.ButtonPrevPage>
                    <S.ButtonNextPage onClick={() => nextListPokemons("next")} ></S.ButtonNextPage>
                    <S.ButtonLastPage onClick={() => nextListPokemons("last")} ></S.ButtonLastPage>
                </S.ContainerButtons>
                <S.ContainerCopyRight>
                    <p>@by: Bart Silva</p>
                </S.ContainerCopyRight>
            </S.ContainerFooter>)
    )
}