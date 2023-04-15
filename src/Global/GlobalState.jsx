import { useEffect, useState } from 'react'
import axios from "axios";

// impagem de fundo do card
import ballCard from '/image/BallCard.svg'
import pokeBallAnimate from '/image/pokeball.gif'
import iPoison from '/image/Poison.svg'
import iGrass from '/image/Grass.svg'
import iFire from '/image/Fire.svg'
import iFlying from '/image/Flying.svg'
import iWater from '/image/Water.svg'
import iBug from '/image/Bug.svg'
import iNormal from '/image/Normal.svg'
import iDark from '/image/Dark.svg'
import iDragon from '/image/Dragon.svg'
import iEletric from '/image/Eletric.svg'
import iFairy from '/image/Fairy.svg'
import iFighting from '/image/Fighting.svg'
import iGhost from '/image/Ghost.svg'
import iGround from '/image/Ground.svg'
import iIce from '/image/Ice.svg'
import iPsychic from '/image/Psychic.svg'
import iRock from '/image/Rock.svg'
import iSteel from '/image/Steel.svg'


let onStart = true

export function GlobalState() {

  //  todas informação para a pagina delalhes 
  const [infoPokemon, setInfoPokemon] = useState([])

  // status do modal
  const [modal, setModal] = useState(false)

  // tipo de ação 
  const [action, setAction] = useState('')

  // pokemons livres
  const [pokemons, setPokemons] = useState([])

  // status da leitura da API
  const [isLoading, setIsLoading] = useState(true)

  // traduzir
  let detalhes_ = {
    id: "",
    name: "",
    image: "",
    type1: "",
    type2: "",
    type1Img: "",
    type2Img: "",
    type1Color: "",
    type2Color: "",
    colorBackGround: "",
    imageFrontPokemon: "",
    imageBackPokemon: "",
    stats: [],
    moves: []
  }
  const [detalhes, setDetalhes] = useState(detalhes_)

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
      type: 'poison',
      img: '/image/Poison.svg',
      bgc: '#AD61AE',
      colorCard: '#BE41BE'
    },
    {
      type: 'grass',
      img: iGrass,
      bgc: '#70B873',
      colorCard: '#739f92'
    },
    {
      type: 'fire',
      img: iFire,
      bgc: '#F44900',
      colorCard: '#eaac7d'
    },
    {
      type: 'flying',
      img: iFlying,
      bgc: '#6892B0',
      colorCard: '#3394A1'
    },
    {
      type: 'water',
      img: iWater,
      bgc: '#33A4F5',
      colorCard: '#71c3ff'
    },
    {
      type: 'bug',
      img: iBug,
      bgc: '#316520',
      colorCard: '#76a966'
    },
    {
      type: 'normal',
      img: iNormal,
      bgc: '#8A8A8A',
      colorCard: '#bf9763'
    },
    {
      type: 'dark',
      img: iDark,
      bgc: '#5C5365',
      colorCard: '#3C5555'
    },
    {
      type: 'dragon',
      img: iDragon,
      bgc: '#0A6CBF',
      colorCard: '#0B1ABA'
    },
    {
      type: 'eletric',
      img: iEletric,
      bgc: '#F4D23B',
      colorCard: '#C1D131'
    },
    {
      type: 'fairy',
      img: iFairy,
      bgc: '#EC8FE6',
      colorCard: '#B18AE1'
    },
    {
      type: 'fighting',
      img: iFighting,
      bgc: '#CE4069',
      colorCard: '#AB4A69'
    },
    {
      type: 'ghost',
      img: iGhost,
      bgc: '#5269ac',
      colorCard: '#5a59aF'
    },
    {
      type: 'ground',
      img: iGround,
      bgc: '#D97745',
      colorCard: '#D6663A'
    },
    {
      type: 'ice',
      img: iIce,
      bgc: '#74CEC0',
      colorCard: '#74BCCA'
    },
    {
      type: 'psychic',
      img: iPsychic,
      bgc: '#F67176',
      colorCard: '#F55265'
    },
    {
      type: 'rock',
      img: iRock,
      bgc: '#C7B78B',
      colorCard: '#C6B32B'
    },
    {
      type: 'steel',
      img: iSteel,
      bgc: '#BBBBBB',
      colorCard: '#B1B1C1'
    },
  ]

  // função que adiciona ou remove o pokemon da pokedex
  // através do status isPokedex ( true na pokédex / false livre )
  function handleStatusPokemon(pokemon, status) {
    const newListPokemons = pokemons.map(pokemonX => {
      if (pokemonX.name === pokemon.name) {
        pokemonX.isPokedex = status
      }
      return pokemonX
    })
    setPokemons(newListPokemons)
    setAction(status ? "capture" : "remove")
    setModal(true)
  }

  // Leitura dos dados da API
  const loadData = async () => {
    setIsLoading(true)
    try {
      // const newDataPokemons = []
      const response = await axios.get('https://pokeapi.co/api/v2/pokemon/')
      // add a chave isPokedex para controlar o status livre ou na pokédex
      // response.data.results.forEach((element) => {
      //   const newElement = {
      //     ...element,
      //     isPokedex: false
      //   }
      //   newDataPokemons.push(newElement)
      // });
      // setPokemons(newDataPokemons)
      setPokemons(response.data.results)
    }
    catch (error) {
      console.log(error)
    }
    setIsLoading(false)
  }

  useEffect(() => {
    loadData()
  }, [])

  function loadDetailPokemon(pokemon) {

    detalhes_ = {
      id: "",
      name: "",
      image: "",
      type1: "",
      type2: "",
      type1Img: "",
      type2Img: "",
      type1Color: "",
      type2Color: "",
      colorBackGround: "",
      imageFrontPokemon: "",
      imageBackPokemon: "",
      stats: [],
      moves: []
    }

      ; (async () => {
        setIsLoading(true)
        try {

          setIsLoading(true)

          // ler dados de cada pokemon
          const getPokemon = await axios.get(pokemon.url)

          // imagem Destaque
          const image_ = getPokemon.data.sprites.other["official-artwork"].front_default;

          // // habilidades
          const abiliti1 = getPokemon.data.types[0]?.type.name;
          const abiliti2 = getPokemon.data.types[1]?.type.name;

          // objeto das habilidades ( imagem e cor do card)
          const data1 = dataAbiliti.find((abiliti) => abiliti.type === abiliti1);
          const data2 = dataAbiliti.find((abiliti) => abiliti.type === abiliti2);

          detalhes_ = {
            id: getPokemon.data.id,
            name: getPokemon.data.name,
            image: getPokemon.data.sprites.other["official-artwork"].front_default,
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
            moves: getPokemon.data.moves.filter((m, index) => index <= 3)
          }
          // setDetalhes(detalhes_)

          setIsLoading(false)
          return(detalhes_)

        } catch (error) {
          console.log(error)
        }
      })()
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

    return {
      pokemons,
      setPokemons,
      handleStatusPokemon,
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
      infoPokemon,
      setInfoPokemon,
      // oficialColor
      detalhes,
      loadDetailPokemon
    }
  }
