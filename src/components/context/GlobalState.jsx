import { useEffect, useState } from 'react'
import axios from "axios";

// impagem de fundo do card
import ballCard from '../../assets/BallCard.svg'
import pokeBallAnimate from '../../assets/pokeball.gif'
import iPoison from '../../assets/Poison.svg'
import iGrass from '../../assets/Grass.svg'
import iFire from '../../assets/Fire.svg'
import iFlying from '../../assets/Flying.svg'
import iWater from '../../assets/Water.svg'
import iBug from '../../assets/Bug.svg'
import iNormal from '../../assets/Normal.svg'
import iDark from '../../assets/Dark.svg'
import iDragon from '../../assets/Dragon.svg'
import iEletric from '../../assets/Eletric.svg'
import iFairy from '../../assets/Fairy.svg'
import iFighting from '../../assets/Fighting.svg'
import iGhost from '../../assets/Ghost.svg'
import iGround from '../../assets/Ground.svg'
import iIce from '../../assets/Ice.svg'
import iPsychic from '../../assets/Psychic.svg'
import iRock from '../../assets/Rock.svg'
import iSteel from '../../assets/Steel.svg'


let onStart = true

export function GlobalState() {

  //  teste.......
  const [infoPokemon, setInfoPokemon] = useState([])

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

  // cor de fundo dos Cards ( figma )
  // const cardColorBG =
  //   [
  //     "#739f92", "#739f92", "#739f92",
  //     "#eaac7d", "#eaac7d", "#eaac7d",
  //     "#71c3ff", "#71c3ff", "#71c3ff",
  //     "#76a966", "#76a966", "#76a966",
  //     "#76a966", "#76a966", "#76a966",
  //     "#bf9763", "#bf9763", "#bf9763",
  //     "#bf9763", "#bf9763"]


  // cor de fundo ofiial 
  const CardColorOficialBG =
    [
      { name: 'red', color: "#ec8484" },
      { name: 'blue', color: "#6699ff" },
      { name: 'green', color: "#339933" },
      { name: 'yellow', color: "#F4D23B" },
      { name: 'purple', color: "#c596bd" },
      { name: 'brown', color: "#cc9966" },
      { name: 'black', color: "#333333" },
      { name: 'gray', color: "#808080" },
      { name: 'white', color: "#dcdbdc" },
    ]

  function oficialColor(_color) {
    if (!_color) return ""
    const result = CardColorOficialBG.find(key => key.name === _color)
    return (result.color)
  }

  // tabela das halidades nome / imagem / cor
  const dataAbiliti = [
    {
      type: 'poison', img: iPoison, bgc: '#AD61AE', colorCard: '#BE41BE'
    },
    {
      type: 'grass', img: iGrass, bgc: '#70B873', colorCard: '#739f92'
    },
    {
      type: 'fire', img: iFire, bgc: '#F44900', colorCard: '#eaac7d'
    },
    {
      type: 'flying', img: iFlying, bgc: '#6892B0', colorCard: '#3394A1'
    },
    {
      type: 'water', img: iWater, bgc: '#33A4F5', colorCard: '#71c3ff'
    },
    {
      type: 'bug', img: iBug, bgc: '#316520', colorCard: '#76a966'
    },
    {
      type: 'normal', img: iNormal, bgc: '#8A8A8A', colorCard: '#bf9763'
    },
    {
      type: 'dark', img: iDark, bgc: '#5C5365', colorCard: '#3C5555'
    },
    {
      type: 'dragon', img: iDragon, bgc: '#0A6CBF', colorCard: '#0B1ABA'
    },
    {
      type: 'eletric', img: iEletric, bgc: '#F4D23B', colorCard: '#C1D131'
    },
    {
      type: 'fairy', img: iFairy, bgc: '#EC8FE6', colorCard: '#B18AE1'
    },
    {
      type: 'fighting', img: iFighting, bgc: '#CE4069', colorCard: '#AB4A69'
    },
    {
      type: 'ghost', img: iGhost, bgc: '#5269ac', colorCard: '#5a59aF'
    },
    {
      type: 'ground', img: iGround, bgc: '#D97745', colorCard: '#D6663A'
    },
    {
      type: 'ice', img: iIce, bgc: '#74CEC0', colorCard: '#74BCCA'
    },
    {
      type: 'psychic', img: iPsychic, bgc: '#F67176', colorCard: '#F55265'
    },
    {
      type: 'rock', img: iRock, bgc: '#C7B78B', colorCard: '#C6B32B'
    },
    {
      type: 'steel', img: iSteel, bgc: '#BBBBBB', colorCard: '#B1B1C1'
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
        const response = await axios.get('https://pokeapi.co/api/v2/pokemon/')
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
  useEffect(() => {
    const localPokedex = localStorage.getItem('pokedex')
    if (localPokedex) {
      setPokedex(JSON.parse(localPokedex))
    } else {
      localStorage.setItem("pokedex", JSON.stringify([]))
    }
  }, [])

  useEffect(() => {
    if (!onStart) {
      localStorage.setItem("pokedex", JSON.stringify(pokedex))
    }
    onStart = false
  }, [pokedex])

  // formatação do Id
  function formatId(id) {
    if (!id) return ""
    return "#" + String(id).padStart(2, 0)
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
    action,
    infoPokemon,
    setInfoPokemon,
    oficialColor
  }
}
