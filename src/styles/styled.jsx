import styled from "styled-components"

export const Container = styled.div`
    width: 100%;
    min-height: 100vh;
    background-color: #5d5d5d;
    
`
export const Main = styled.main`
    width: 100%;
    min-height: 100vh;  
    height: fit-content;
    
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
    background-color: ${({color})=>color};


`
// details

export const DetailCard = styled.div`
    width: 100%;
    height: 450px;
    height: fit-content;
    background-color: burlywood;
    display: flex;
    flex-wrap: wrap;
    position: relative;
    justify-content: space-evenly;
  

`

export const SectionLeft = styled.section`
    width: 46%;
    min-width: 350px;
    height: 100%;
    padding: 15px 0;
    border: 2px solid #0ff;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
 
`
export const ContainerImage = styled.div`
    display: flex;
    justify-content: flex-start;
    align-items: center;
    flex-direction: column;
    gap: 15px;
    background-color: #fff;
`
export const BoxImage = styled.div`
    width: 210px;
    height: 210px;
    background-color: #00f10f;
        
`

export const BoxStates = styled.div`
    width: 330px;
    min-height: 100% ;
    background-color: #fff;
    
`

export const BoxIdentification = styled.div`
    
`
export const BoxMoves = styled.div`
    
`
export const SectionRight = styled.section`
    width: 46%;
    min-width: 350px;
    height: 100%;
    border: 2px solid #f0f;

`
export const ImgBackGround = styled.img`
    width: 100%;
    height: auto;

  
`
