import { useContext } from "react";
import { GlobalContext } from "../../Global/GlobalStateContext";
import * as S from "./modalStyled"

export function Modal() {

    const context = useContext(GlobalContext)

    const showModal = () => {
        switch (context?.action) {
            case 'capture':
                return <>
                    <h2>Gotcha!</h2>
                    <p>Pokémon adicionado a sua Pokédex</p>
                </>
            case 'remove':
                return <>
                    <h2>Oh, no!</h2>
                    <p>O Pokémon foi removido da sua Pokédex</p>
                </>
            default:
                return <>
                    <h2>Ops!</h2>
                    <p>Algo deu errado!</p>
                </>
        }
    }
    return (
        <S.ExternalModal onClick={() => { context.setModal(false) }}>
            {/* <S.MainModal className="animate__animated animate__fadeIn"> */}
            <S.MainModal>
                {showModal()}
            </S.MainModal>
        </S.ExternalModal>
    )
}