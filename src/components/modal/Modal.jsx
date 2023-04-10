import { useContext } from "react";
import { GlobalContext } from "../context/GlobalContext";
import * as S from "./styledModal"

export function Modal() {

    const context = useContext(GlobalContext)
    // desabilidata scrool vertical
    document.documentElement.style.overflow = 'hidden';

    const showModal = () => {
        switch (context?.action) {
            case 'capture':
                return <>
                    <h2>Gotcha!</h2>
                    <p>Pokemon adicionado a sua Pokédex</p>
                </>
            case 'remove':
                return <>
                    <h2>Oh, no!</h2>
                    <p>O Pokemon foi removido da sua Pokédex</p>
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
            <S.MainModal>
                {showModal()}
            </S.MainModal>
        </S.ExternalModal>
    )
}