import { useContext } from "react"
import { GlobalContext } from "../../Global/GlobalStateContext"
import styled from 'styled-components'

const ContainerFooter = styled.footer`
    position: fixed;
    z-index: 999999;
    bottom: 0;
    left: 0;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 60px;
    background-color: black;
    button{
        border: none;
        border-radius: 12px;
        width: 50px;
        height: 50px;
        cursor: pointer;
        background-repeat: no-repeat;
        :active{
            transform: scale(0.9);
        }
    }
`
const ButtonFirstPage = styled.button`
    background-image: url('/icon/first_page.svg');
`
const ButtonPrevPage = styled.button`
    background-image: url('/icon/prev_page.svg');
`
const ButtonNextPage = styled.button`
    background-image: url('/icon/next_page.svg');
`
const ButtonLastPage = styled.button`
    background-image: url('/icon/last_page.svg');
`
const ContainerButtons = styled.section`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 20px;    
`
const ContainerCopyRight = styled.section`
    position: absolute;
    bottom: 50%;
    right: 25px;
    transform: translateY(50%);
    color:#fff;
`


export function Footer() {

    const context = useContext(GlobalContext)

    let url = "https://pokeapi.co/api/v2/pokemon/?offset=xx&limit=20"


    function nextListPokemons(pageDirection) {
        const lastPage = (64 * 20)
        const xoffset = context.offset
        let xurl = ""
        switch (pageDirection) {
            case "next":
                if (xoffset + 20 <= lastPage) {
                    context.setOffset(prevState => prevState + 20)
                    xurl = url.replace("offset=xx", "offset=" + (xoffset + 20))
                }
                break
            case "prev":
                if (xoffset - 20 >= 0) {
                    context.setOffset(prevState => prevState - 20)
                    xurl = url.replace("offset=xx", "offset=" +(xoffset- 20))
                }
                break
            case "first":
                context.setOffset(0)
                xurl = url.replace("offset=xx", "offset=0")
                break
            case "last":
                context.setOffset(lastPage)
                xurl = url.replace("offset=xx", "offset=" + lastPage)
                break
        }
        xurl && context.loadData(xurl)
    }

    return (
        <ContainerFooter>
            <ContainerButtons>
                <ButtonFirstPage onClick={() => nextListPokemons("first")}></ButtonFirstPage>
                <ButtonPrevPage onClick={() => nextListPokemons("prev")} ></ButtonPrevPage>
                <ButtonNextPage onClick={() => nextListPokemons("next")} ></ButtonNextPage>
                <ButtonLastPage onClick={() => nextListPokemons("last")} ></ButtonLastPage>
            </ContainerButtons>
            <ContainerCopyRight>
                <p>@by: Bart Silva</p>
            </ContainerCopyRight>

        </ContainerFooter>
    )
}