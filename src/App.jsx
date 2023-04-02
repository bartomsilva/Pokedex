import { useEffect } from 'react'
import Router from './components/router/Router'
import { useContext } from 'react'
import { PokedexContext } from './components/context/PokedexContext'
import { loadData } from './components/data/LoadData'

function App() {

  const { setPokemons,pokemons } = useContext(PokedexContext)
  const { setPokedex,pokedex } = useContext(PokedexContext)
  const { setValidPokemons } = useContext(PokedexContext)

  useEffect(() => {

    loadData("https://pokeapi.co/api/v2/pokemon", setPokemons)
    // loadData("https://pokeapi.co/api/v2/pokemon",setPokedex) 

  }, [])

    async function findPokemon(name) {
        const result = await pokedex?.filter(pokemon => !pokemon.name.startsWith(name))
        return true
    }
    // // console.log(pokemons)

    useEffect(() => {
        const result = pokemons.filter(e => findPokemon(e.name))
        console.log(result)
        setValidPokemons(result)

    }, [pokemons,pokedex])

  
  return (
    <>
        <Router />
    </>
  )
}

export default App
