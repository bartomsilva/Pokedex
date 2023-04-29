import { useEffect, useState } from 'react'
import axios from "axios";
import { BASE_URL } from '../Constants/Constants';

import ballCard from '/image/BallCard.svg'
import pokeBallAnimate from '/image/pokeball.gif'
import noImage from '/image/no_image.png'

export function GlobalState() {

  // informação sobre a última página acessada
  // sobre qual pokpemon foi solicitado os detalhes
  const [infoLastPage, setInfoLastPage] = useState([])

  // status do modal
  const [modal, setModal] = useState(false)

  // tipo de ação 
  const [action, setAction] = useState('')

  // pokemons livres
  const [pokemons, setPokemons] = useState([])

  // pokemons capturados
  const [pokedex, setPokedex] = useState([])

  // status da leitura da API
  const [isLoading, setIsLoading] = useState(true)

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

  const [offset, setOffset] = useState(0)


  function oficialColor(_color) {
    if (!_color) return ""
    const result = CardColorOficialBG.find(key => key.name === _color)
    return (result.color)
  }

  // tabela das halidades nome / imagem / cor
  const dataAbiliti = [
    {
      type: 'poison',
      img: '/image/Poison.svg',
      bgc: '#AD61AE',
      colorCard: '#BE41BE'
    },
    {
      type: 'grass',
      img: '/image/Grass.svg',
      bgc: '#70B873',
      colorCard: '#739f92'
    },
    {
      type: 'fire',
      img: '/image/Fire.svg',
      bgc: '#F44900',
      colorCard: '#eaac7d'
    },
    {
      type: 'flying',
      img: '/image/Flying.svg',
      bgc: '#6892B0',
      colorCard: '#3394A1'
    },
    {
      type: 'water',
      img: '/image/Water.svg',
      bgc: '#33A4F5',
      colorCard: '#71c3ff'
    },
    {
      type: 'bug',
      img: '/image/Bug.svg',
      bgc: '#316520',
      colorCard: '#76a966'
    },
    {
      type: 'normal',
      img: '/image/Normal.svg',
      bgc: '#8A8A8A',
      colorCard: '#bf9763'
    },
    {
      type: 'dark',
      img: '/image/Dark.svg',
      bgc: '#5C5365',
      colorCard: '#3C5555'
    },
    {
      type: 'dragon',
      img: '/image/Dragon.svg',
      bgc: '#0A6CBF',
      colorCard: '#0B1ABA'
    },
    {
      type: 'electric',
      img: '/image/Electric.svg',
      bgc: '#F4D23B',
      colorCard: '#C1D131'
    },
    {
      type: 'fairy',
      img: '/image/Fairy.svg',
      bgc: '#EC8FE6',
      colorCard: '#B18AE1'
    },
    {
      type: 'fighting',
      img: '/image/Fighting.svg',
      bgc: '#CE4069',
      colorCard: '#AB4A69'
    },
    {
      type: 'ghost',
      img: '/image/Ghost.svg',
      bgc: '#5269ac',
      colorCard: '#5a59aF'
    },
    {
      type: 'ground',
      img: '/image/Ground.svg',
      bgc: '#D97745',
      colorCard: '#D6663A'
    },
    {
      type: 'ice',
      img: '/image/Ice.svg',
      bgc: '#74CEC0',
      colorCard: '#74BCCA'
    },
    {
      type: 'psychic',
      img: '/image/Psychic.svg',
      bgc: '#F67176',
      colorCard: '#F55265'
    },
    {
      type: 'rock',
      img: '/image/Rock.svg',
      bgc: '#C7B78B',
      colorCard: '#C6B32B'
    },
    {
      type: 'steel',
      img: '/image/Steel.svg',
      bgc: '#BBBBBB',
      colorCard: '#B1B1C1'
    },
  ]

  //função de captura do pokemon
  function addPokemonPokedex(pokemon) {
    const newPokedex = [...pokedex, pokemon]
    setPokedex(newPokedex)
    setAction("capture")
    setModal(true)
  }

  // função que tira o pokemon da pokédex
  function removePokemonPokedex(pokemon) {
    const newPokedex = pokedex.filter(pokedex => pokedex.name !== pokemon.name)
    setPokedex(newPokedex)
    setAction("remove")
    setModal(true)
  }


  // Leitura dos dados da API
  const loadData = async (url) => {
    setIsLoading(true)
    try {
      const response = await axios.get(url)
      setPokemons(response.data.results)
    }
    catch (error) {
      console.log(error)
    }
    setIsLoading(false)
  }

  useEffect(() => {
    loadData(BASE_URL)
  }, [])

  function noPokedex(namePokemon) {
    const foundPokemon = pokedex.filter(pokemon => pokemon.name === namePokemon)
    if (foundPokemon.length > 0) { //indica que achou na podex e não pode ser mostrado na home
      return false // não aparece na home
    } else {
      return true // aparece na home
    }
  }

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

  async function getDetailPokemon(url) {

    setIsLoading(true)
    try {
      // ler dados de cada pokemon
      const getPokemon = await axios.get(url)
      let image_Pokemon = noImage

      image_Pokemon = getPokemon.data.sprites.other["official-artwork"].front_default
        ? getPokemon.data.sprites.other["official-artwork"].front_default
        : image_Pokemon

      // // habilidades
      const abiliti1 = getPokemon.data.types[0]?.type.name;
      const abiliti2 = getPokemon.data.types[1]?.type.name;

      // objeto das habilidades ( imagem e cor do card)
      const data1 = dataAbiliti.find((abiliti) => abiliti.type === abiliti1);
      const data2 = dataAbiliti.find((abiliti) => abiliti.type === abiliti2);

      const detalhes_ = {
        id: getPokemon.data.id,
        name: getPokemon.data.name,
        image: image_Pokemon,
        type1: getPokemon.data.types[0]?.type.name,
        type2: getPokemon.data.types[1]?.type.name,
        type1Img: data1?.img,
        type2Img: data2?.img,
        type1Color: data1?.bgc,
        type2Color: data2?.bgc,
        colorBackGround: data1?.colorCard,
        imageFrontPokemon: getPokemon.data.sprites.front_default,
        imageBackPokemon: getPokemon.data.sprites.back_default,
        stats: getPokemon.data.stats,
        moves: getPokemon.data.moves.filter((m, index) => index <= 3),
        pathLastPage: location.pathname
      }
      setIsLoading(false)
      return(detalhes_)

    } catch (error) {
      console.log(error)
      setIsLoading(false)
    }
  }

  return {
    pokemons,
    setPokemons,
    ballCard,
    pokeBallAnimate,
    dataAbiliti,
    setIsLoading,
    isLoading,
    firstLetterUpper,
    formatId,
    modal,
    setModal,
    action,
    infoLastPage,
    setInfoLastPage,
    offset,
    setOffset,
    loadData,
    pokedex,
    setPokedex,
    addPokemonPokedex,
    removePokemonPokedex,
    noPokedex,
    noImage,
    getDetailPokemon
    // oficialColor
  }
}
