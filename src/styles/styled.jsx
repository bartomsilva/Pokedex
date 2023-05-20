import styled from "styled-components"
import { pulse } from "../Global/GlobalEffetsStyled";

export const ContainerTypes = styled.div`
  top: 80px;
  display: flex;
  width: fit-content;
  gap: 8px;
`;

export const Container = styled.div`
    width: 100%;
    min-height: fit-content;
    background-color: #5d5d5d;
    
`
export const Main = styled.main`
    width: 100%;
    min-height: 100vh;  
    height: fit-content;    
    position: relative;
    overflow: hidden;
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
        margin-bottom: 20px;
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
    @media(max-width: 768px){
        padding-top: 0;
    }
`
export const ImageWaitLoadingData = styled.img`
    height: 200px;
`

export const ImgPokemon = styled.img`
    position: absolute;
    top: -105px;
    right: 20px;
    width: 160px;
    @media(max-width: 768px){
        position: static;
    }
    :hover{
      animation: ${pulse} 600ms linear infinite;
      cursor: pointer;
    }
 `

 
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

@media(max-width: 768px){
    width: 95vw;
    height: fit-content;
    padding-bottom: 30px;
    position: static;
    display: flex;
    flex-direction: column-reverse;
}
`

export const SectionLeft = styled.section`
display: flex;
flex-wrap: wrap;
justify-content: space-evenly;
width: 390px;
height: 370px;
padding: 10px 0 0 5px;

@media(max-width:768px){
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: fit-content;
}

`
export const ContainerImage = styled.div`
display: flex;
justify-content: space-between;
align-items: center;
flex-direction: column;
gap: 15px;
height: 350px;
margin-right: 10px;

@media(max-width:768px){
    flex-direction: row; 
    justify-content: center;
    align-items: center;
    height: fit-content;
}

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
img{
    width: 100%;
}
@media(max-width:768px){
    margin-bottom: 20px ;
}


`

export const BoxStats = styled.div`
width: 245px;
height: 350px;
background-color: #fff;   
border-radius: 12px ;
padding: 15px 10px;

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
padding-top: 8px;
z-index: 99999;
overflow: hidden;
   
`
export const Stats = styled.div`
width: 100%;
min-height:fit-content;
margin-top: 20px;
display: grid;
grid-template-columns: 50px 30px 70px;
gap: 5px;
justify-content: flex-start;
`
export const Moves = styled.div`
width: 100%; 
height: 100%; 
display: flex ;
flex-direction: column;
gap: 12px;
margin-top: 8px;    
`

export const Move = styled.button`
width: 110px;
height: 30px;
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
height: 20px;
font-size: 14px;
`

export const StatsVal = styled.div`
height: 20px;
text-align: center;
font-size: 14px;
font-weight: ${({bold})=>bold?"700":"normal"} ;

`

export const StatsBar = styled.div`
background-color: ${({color})=>color};
width: ${({ w }) => w + "%"};
/* line-height: 2.5; */
height: 12px;
margin-top: 3px;
z-index: 99999;
border-radius: 4px;
`
export const BoxIdentification = styled.div`    
`

export const SectionRight = styled.section`
width:370px; 
height: 370px;
display: flex;
flex-direction: column;
padding: 10px;
    
@media(max-width: 768px){           
    height: fit-content;
    flex-direction: row;
    flex-wrap: wrap;
    gap: 20px;
    justify-content: center;
    align-items: center;
}

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
font-size: 30px;
color: #fff;
margin-bottom: 10px;

`
export const ImgBackGround = styled.img`
position: absolute;
top: 0;
right: 10px;
height: 100%;
@media(max-width: 768px){
    display: none;
}
`
