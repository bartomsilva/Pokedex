import { useContext } from "react";
import { GlobalContext } from "../context/GlobalContext";

import styled from 'styled-components'

const ExternalModal = styled.div`
    position: fixed;
    top:0;
    left: 0;
    width: 100%;
    min-height: 1000vh;
    z-index: 9999998;
    background-color: rgba(0,0,0,0.6);
`
const MainModal = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 30px;
    pointer-events: all;

    width: 451px;
    height: 222px;

    position: fixed;
    left: 50%;
    top: 50%;
    transform: translate(-50%,-50%);
    z-index: 9999999;

    background-color: #FFFFFF;
    color:#000000;
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 700;
    border-radius: 12px ;
    h2{
        font-size: 48px;        
    }
    p{
        font-size: 16px;
    }
    
`
export function Modal() {

    const context = useContext(GlobalContext)
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
        <ExternalModal onClick={() => { context.setModal(false) }}>
            <MainModal>
                {showModal()}
            </MainModal>
        </ExternalModal>
    )
}