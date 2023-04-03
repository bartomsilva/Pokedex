import { useEffect, useState } from 'react'
import axios from "axios";

// impagem de fundo do card
import ballCard from '../../assets/BallCard.svg'
import pokeBallAnimate from '../../assets/pokeball.gif'

// imagens da habilidades
import poisonI from '../../assets/Poison.svg'
import grassI from '../../assets/Grass.svg'
import fireI from '../../assets/Fire.svg'
import flyingI from '../../assets/Flying.svg'
import waterI from '../../assets/Water.svg'
import bugI from '../../assets/Bug.svg'
import normalI from '../../assets/Normal.svg'
import darkI from '../../assets/Dark.svg'
import dragonI from '../../assets/Dragon.svg'
import eletricI from '../../assets/Eletric.svg'
import fairyI from '../../assets/Fairy.svg'
import fightingI from '../../assets/Fighting.svg'
import ghostI from '../../assets/Ghost.svg'
import groundI from '../../assets/Ground.svg'
import iceI from '../../assets/Ice.svg'
import psychicI from '../../assets/Psychic.svg'
import rockI from '../../assets/Rock.svg'
import steelI from '../../assets/Steel.svg'

let onStart=true

export function GlobalState() {

  // status do modal
  const [modal, setModal] = useState(false)

  // tipo de ação 
  const [action, setAction] = useState('')

  // pokemons livres
  const [pokemons, setPokemons] = useState([])

  // pokemons na pokedex
  const [pokedex, setPokedex] = useState([])
  
  // status da leitura da API
  const [isLoading, setIsLoading] = useState(true)

  // cor de fundo dos Cards 
  const cardColorBG =
    ['#739f92', "#739f92", "#739f92",
      "#eaac7d", "#eaac7d", "#eaac7d",
      "#71c3ff", "#71c3ff", "#71c3ff",
      "#76a966", "#76a966", "#76a966",
      "#76a966", "#76a966", "#76a966",
      "#bf9763", "#bf9763", "#bf9763",
      "#bf9763", "#bf9763"]

  // tabela das halidades nome / imagem / cor
  const dataAbiliti = [
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

  // função que adiciona o pokemon na pokedex
  function addPokedex(char) {
    const newList = pokemons.filter(pokemon => pokemon.name !== char.name)
    const newPokedex = [...pokedex, char]
    setPokedex(newPokedex)
    setPokemons(newList)
    setAction('capture')
    setModal(true)
  }

  // função que remove o pokemon da pokedex
  function removePokedex(char) {
    const newList = pokedex.filter(pokemon => pokemon.name !== char.name)
    setPokedex(newList)
    const newPokemons = [...pokemons, char]
    setPokemons(newPokemons)
    setAction('remove')
    setModal(true)
  }

  // verifica se o Pokemon está na Pokedex
  function noPokedex(name) {
    const result = pokedex.filter(pokemon => pokemon.name === name)
    if (result && result.length > 0) {
      return false
    } else {
      return true
    }
  }

  // Leitura dos dados da API
  function loadData() {

    (async () => {
      setIsLoading(true)
      try {
        const response = await axios.get('https://pokeapi.co/api/v2/pokemon')
        const validPokemons = response.data.results.filter(pokemon => noPokedex(pokemon.name))
        setPokemons(validPokemons)
      }
      catch (error) {
        console.log(error)
      }
    })()
    setIsLoading(false)

  }

  useEffect(() => {
    loadData()

  }, [])

  // cria ou lê a pokedex localStorage
  useEffect(()=>{
      const localPokedex = localStorage.getItem('pokedex')
      if (localPokedex) {
        setPokedex(JSON.parse(localPokedex))
      } else {
        localStorage.setItem("pokedex",JSON.stringify([]))
      }
  },[])

  useEffect(()=>{
    if(!onStart){
      localStorage.setItem("pokedex",JSON.stringify(pokedex))  
    }
    onStart=false
  },[pokedex])

  // formatação do Id
  function formatId(id) {
    if (!id) return ""
    id = id.toString();
    if (id.length === 1) {
      return "#0" + id;
    }
    return "#" + id;
  }

  // função para deixar a primeira letra maiuscula
  function firstLetterUpper(text) {
    if (!text || text.length === 0) return "";
    text = text.toLowerCase();
    return text[0].toUpperCase() + text.substring(1);
  }

  return {
    pokemons,
    setPokemons,
    pokedex,
    setPokedex,
    addPokedex,
    removePokedex,
    loadData,
    cardColorBG,
    ballCard,
    pokeBallAnimate,
    dataAbiliti,
    setIsLoading,
    isLoading,
    firstLetterUpper,
    formatId,
    noPokedex,
    modal,
    setModal,
    action
  }
}
