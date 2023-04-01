import styled from "styled-components"

export const Container = styled.div`
    width: 100%;
    min-height: 100vh;
    background-color: #5d5d5d;
`
export const Main = styled.main`
    width: 100%;
    min-height: 100vh;  
    
`
export const HeaderCards = styled.div`
    width: 100%;
    height: 120px;
    display: flex;
    align-items: center;
    padding: 0 25px;

    @media(max-width:480px){
        height: 100px;
        justify-content: center;
    }
`

export const TitleCard = styled.p`
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 700;
    color: #fff;
    font-size: 47px;   
    @media(max-width:480px){
        font-size: 33px;
    }
     
`
export const ContainerCard = styled.div`
    padding: 70px 25px;
    width: 100%;
    height: fit-content;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 90px 15px;
    min-width: 340px;

`
