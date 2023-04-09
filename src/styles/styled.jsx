import styled from "styled-components"

export const ContainerTypes = styled.div`
  top: 80px;
  display: flex;
  width: fit-content;
  gap: 8px;
`;

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
    background-color: ${({ color }) => color};
    
    position: relative;


`
// details

export const DetailCard = styled.div`
    position: relative;
    top: -85px;
    width: 800px;
    height: 380px;
    padding: 5 10px 15px 10px;
    background-color: ${({ color }) => color};
    border-radius: 20px;        
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: center;
`

export const SectionLeft = styled.section`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
    width: 380px;
    height: 370px;
    padding: 10px 0;
 
`
export const ContainerImage = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-direction: column;
    gap: 15px;

    height: 350px;
  `
export const BoxImage = styled.div`    
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 8px;   

    width: 130px;
    height: 150px;
    background-color: #fff;
    z-index: 100;
`

export const BoxStats = styled.div`
    width: 210px;
    height: 350px;
    background-color: #fff;   
    border-radius: 12px ;
    padding: 15px;

    

`
export const TitleInfo = styled.h2`

    font-family: 'Inter';
    font-style: normal;
    font-weight: 800;
    font-size: 18px;

`
export const BoxMoves = styled(BoxStats)`
    margin-top: 10px;
    width: 170px;
    height: 100%;
    padding-top: 10px;
    z-index: 99999;
    overflow: hidden;
       
`
export const Stats = styled.div`
    width: 100%;
    min-height:fit-content;
    margin-top: 20px;
    display: grid;
    grid-template-columns: auto auto 80px;
    gap: 18px;
    justify-content: flex-start;
`
export const Moves = styled.div`
    width: 100%; 
    height: 100%; 
    display: flex ;
    flex-direction: column;
    gap: 15px;
    margin-top: 10px;    
`

export const Move = styled.button`
width: 110px;
height: 35px;
font-family: 'Montserrat';
font-style: normal;
font-weight: 400;
font-size: 13px;
background: #ECECEC;
border: 1px dashed rgba(0, 0, 0, 0.14);
border-radius: 12px;
`
export const StatsName = styled.div`
    text-align: right;
    height: 30px;
`

export const StatsVal = styled.div`
    height: 30px;
    text-align: center;
`

export const StatsBar = styled.div`
    background-color: red;
    width: ${({ w }) => w + "%"};
    line-height: 2.5;
    height: 10px;
    margin-top: 3px;
    z-index: 99999;
`
export const BoxIdentification = styled.div`    
`

export const SectionRight = styled.section`
    width:380px; 
    height: 370px;
    display: flex;
    flex-direction: column;
    padding: 10px 0;

`
export const DetailId = styled.p`
    font-family: 'Inter';
    font-style: normal;
    font-weight: 700;
    font-size: 16px;
    color: #fff;
`
export const DetailName = styled.p`
    font-family: 'Inter';
    font-style: normal;
    font-weight: 700;
    font-size: 38px;
    color: #fff;
    margin-bottom: 10px;
    
`
export const ImgBackGround = styled.img`
    position: absolute;
    top: 0;
    right: 10px;
    height: 100%;
`
export const ImgPokemon = styled.img`
    position: absolute;
    top: -85px;
    right: 10px;
    width: 160px;
 `