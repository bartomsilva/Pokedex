import styled from 'styled-components'

export const Box = styled.div`
    width: ${({w})=>w?w:"fit-content"}t;
    height: ${({h})=>h};
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 18px;
    padding: 0 6px;
    border: 1px dashed rgba(255, 255, 255, 0.47);
    border-radius: 8px;
    background-color: ${({ color }) => color};
    font-family: "Poppins";
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    
`
export const ImgType = styled.img`
    width: ${({h})=>h};
    z-index: 99999;
`;

export const Abiliti = styled.span`
    font-family: "Poppins";
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
`;