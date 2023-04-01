import styled from 'styled-components'
import logo from '../assets/logo.svg'
import PokeCard from '../components/pokecard/PokeCard'
import { useContext } from 'react'
import { PokedexContext } from '../components/context/PokedexContext'

import poisonI from '../assets/Poison.svg'
import grassI from '../assets/Grass.svg'
import fireI from '../assets/Fire.svg'
import flyingI from '../assets/Flying.svg'
import waterI from '../assets/Water.svg'
import bugI from '../assets/Bug.svg'
import normalI from '../assets/Normal.svg'
import darkI from '../assets/Dark.svg'
import dragonI from '../assets/Dragon.svg'
import eletricI from '../assets/Eletric.svg'
import fairyI from '../assets/Fairy.svg'
import fightingI from '../assets/Fighting.svg'
import ghostI from '../assets/Ghost.svg'
import groundI from '../assets/Ground.svg'
import iceI from '../assets/Ice.svg'
import psychicI from '../assets/Psychic.svg'
import rockI from '../assets/Rock.svg'
import steelI from '../assets/Steel.svg'


export const Container = styled.div`
    width: 100%;
    min-height: 100vh;
    background-color: #5d5d5d;
`
export const Header = styled.header`
    position: relative;
    top: 0;
    left: 0;
    padding: 0 25px;
    
    display: flex;
    align-items: center;
    justify-content: center;

    width: 100%;
    height: 130px;
    background-color: #fff;
`
export const Logo = styled.img` 
    position: absolute;
    left: 50%;
    top:50%;
    transform: translate(-60%,-50%);
    width: 240px;
    
    @media(max-width:768px){
        width: 200px;
        left: 0;
        margin-left: 25px;
        transform: translate(0%,-50%);
    }

    @media(max-width:480px){
        width: 140px;
        left: 0;
        margin-left: 15px;
        transform: translate(0%,-50%);
    }
            
`

export const BtnPokedex = styled.button`
    position: absolute;
    top: 50%;
    right: 0;
    margin-right: 25px;
    transform: translateY(-50%);
    width: 165px;
    height: 50px;
    background-color: #33A4F5;
    border: none;
    border-radius: 8px;
    font-family: 'Poppins', sans-serif;
    color: #fff;
    font-size: 16px;
    font-weight: normal;
    cursor: pointer;


    @media(max-width:768px){
        width: 130px;
        height: 40px;   
        font-size: 90%;
    }

    @media(max-width:480px){
        width: 120px; 
        height: 40px;  
        font-size: 80%; 
        margin-right: 20px;
    }   

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

export const Title = styled.p`
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

`

const PokemonColorBG =
    ['#739f92', "#739f92", "#739f92",
        "#eaac7d", "#eaac7d", "#eaac7d",
        "#71c3ff", "#71c3ff", "#71c3ff",
        "#76a966", "#76a966", "#76a966",
        "#76a966", "#76a966", "#76a966",
        "#bf9763", "#bf9763", "#bf9763",
        "#bf9763", "#bf9763"]


export const dataAbiliti = [
    {
        type: 'poison',
        img: poisonI,
        bgc: '#AD61AE'
    },
    {
        type: 'grass',
        img: grassI,
        bgc: '#70B873'
    },
    {
        type: 'fire',
        img: fireI,
        bgc: '#F44900'
    },
    {
        type: 'flying',
        img: flyingI,
        bgc: '#6892B0'
    },
    {
        type: 'water',
        img: waterI,
        bgc: '#33A4F5'
    },
    {
        type: 'bug',
        img: bugI,
        bgc: '#316520'
    },
    {
        type: 'normal',
        img: normalI,
        bgc: '#8A8A8A'
    },
    {
        type: 'dark',
        img: darkI,
        bgc: '#5C5365'
    },
    {
        type: 'dragon',
        img: dragonI,
        bgc: '#0A6CBF'
    },
    {
        type: 'eletric',
        img: eletricI,
        bgc: '#F4D23B'
    },
    {
        type: 'fairy',
        img: fairyI,
        bgc: '#EC8FE6'
    },
    {
        type: 'fighting',
        img: fightingI,
        bgc: '#CE4069'
    },
    {
        type: 'ghost',
        img: ghostI,
        bgc: '#CE4069'
    },
    {
        type: 'ground',
        img: groundI,
        bgc: '#D97745'
    },
    {
        type: 'ice',
        img: iceI,
        bgc: '#74CEC0'
    },
    {
        type: 'psychic',
        img: psychicI,
        bgc: '#F67176'
    },
    {
        type: 'rock',
        img: rockI,
        bgc: '#C7B78B'
    },
    {
        type: 'steel',
        img: steelI,
        bgc: '#BBBBBB'
    },

]

export default function Home() {


    const { pokemons } = useContext(PokedexContext)

    return (
        <Container>
           <Header>
                <Logo src={logo} alt="" />
                <BtnPokedex>Pokédex</BtnPokedex>
            </Header>
            <Main>
                <HeaderCards>
                    <Title>Todos Pokemons</Title>
                </HeaderCards>
                <ContainerCard>
                    {
                        pokemons?.map((pokemon, idx) => {
                            return PokeCard(idx, pokemon, PokemonColorBG[idx], dataAbiliti)
                        })
                    }
                </ContainerCard>

            </Main>
        </Container>
    )

}