import styled from "styled-components"
import { pulse } from "../../Global/GlobalEffetsStyled";
// details

export const ImageBackDetail = styled.img`
    position: absolute ;
    top: -130px;    
    width: 800px; 
    top: -240px;
    left: 50%;
    transform: translateX(-50%);
    z-index: -1
`;

export const DetailCard = styled.div`
    position: relative;
    top: -85px;
    width: 1000px;
    height: 410px;
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
    width: 390px;
    width: 560px;
    height: 390px;
    padding: 10px 0 0 5px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;

    @media(max-width:768px){
        width: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        height: fit-content;
        padding: 10px;
     }   
`

export const SectionRight = styled.section`
    width:370px; 
    width: 440px; 
    height: 390px;
    display: flex;
    flex-direction: column;
    padding: 10px;

        
    @media(max-width: 768px){    
        width:370px; 
        height: fit-content;
        flex-direction: row;
        flex-wrap: wrap;
        gap: 20px;
        justify-content: center;
        align-items: center;
    }

`


export const ContainerImage = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-direction: column;
    gap: 30px;
    height: 350px;
    margin-right: 10px;

    @media(max-width:768px){
        flex-direction: row; 
        justify-content: center;
        align-items: center;
        height: fit-content;
        margin: 0;

    }

  `
export const BoxImage = styled.div`    
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 8px;   
    width: 170px;
    height: 170px;
    background-color: #fff;
    z-index: 100;
    img{
        width: 100%;
    }
    @media(max-width:768px){
        width: 150px;
        height: 150px;
        margin-bottom: 20px ;
    }


`
export const BoxStats = styled.div`
    width: 265px;
    height: 370px;
    background-color: #fff;   
    border-radius: 12px ;
    padding: 15px 10px;
    @media(max-width: 768px){
        width: 245px;
    }
`;

export const Stats = styled.div`
    width: 100%;
    min-height:fit-content;
    margin-top: 20px;
    display: grid;
    grid-template-columns: 50px 30px 70px;
    gap: 5px;
    justify-content: flex-start;
    
`;

export const StatsName = styled.div`
    text-align: right;
    font-size: 14px;
`;

export const StatsVal = styled.div`
    height: 8px;
    text-align: center;
    font-size: 14px;
    font-weight: ${({ bold }) => bold ? "700" : "normal"} ;

`;

export const StatsBar = styled.div`
    background-color: ${({ color }) => color};
    width: ${({ w }) => w + "%"};
    /* height: 12px; */
    /* margin-top: 3px; */
    z-index: 99999;
    border-radius: 4px;
`;

export const TitleInfo = styled.h2`

    font-family: 'Inter';
    font-style: normal;
    font-weight: 800;
    font-size: 18px;
`;

export const BoxMoves = styled(BoxStats)`
    margin-top: 10px;
    width: 170px;
    height: 100%;
    padding-top: 8px;
    z-index: 99999;
    overflow: hidden;      
`;

export const Moves = styled.div`
    width: 100%; 
    height: 100%; 
    display: flex ;
    flex-direction: column;
    gap: 12px;
    margin-top: 8px;    
`;

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
`;

export const BoxIdentification = styled.div`    
`;


export const DetailId = styled.p`
    font-family: 'Inter';
    font-style: normal;
    font-weight: 700;
    font-size: 16px;
    color: #fff;
`;
export const DetailName = styled.p`
    font-family: 'Inter';
    font-style: normal;
    font-weight: 700;
    font-size: 30px;
    color: #fff;
    margin-bottom: 10px;
`;

export const ImgBackGroundCardDetail = styled.img`
    position: absolute;
    top: 0;
    right: 0px;
    height: 100%;
    height: 440px;
    @media(max-width: 768px){
        display: none;
    }
`;

export const ImgPokemonDetail = styled.img`
    position: absolute;
    top: -105px;
    right: 20px;
    width: 180px;
    @media(max-width: 768px){
        position: static;
    }
    :hover{
      animation: ${pulse} 600ms linear infinite;
      cursor: pointer;
    }
 `;



