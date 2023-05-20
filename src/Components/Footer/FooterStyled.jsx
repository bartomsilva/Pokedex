import styled from 'styled-components'
export const ContainerFooter = styled.footer`
    position: fixed;
    z-index: 999999;
    bottom: 0;
    left: 0;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 40px;
    /* background-color: black; */
    button{
        border: none;
        border-radius: 12px;
        width: 30px;
        height: 30px;
        cursor: pointer;
        background-repeat: no-repeat;
        background-size: cover;
        :active{
            transform: scale(0.9);
        }
    }
`
export const ButtonFirstPage = styled.button`
    background-image: url('/icon/first_page.svg');
`
export const ButtonPrevPage = styled.button`
    background-image: url('/icon/prev_page.svg');
`
export const ButtonNextPage = styled.button`
    background-image: url('/icon/next_page.svg');
`
export const ButtonLastPage = styled.button`
    background-image: url('/icon/last_page.svg');
`
export const ContainerButtons = styled.section`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 10px;   
    transition-duration: 300ms;
    button { 
        &:hover{
        transform: scale(1.1);
        }
    }
    @media(max-width: 768px){
        position: absolute;
        left: 25px;

    } 
`
export const ContainerCopyRight = styled.section`
    position: absolute;
    bottom: 50%;
    right: 25px;
    transform: translateY(50%);
    color:#fff;
`