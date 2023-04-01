import { useEffect } from 'react'
import Router from './components/router/Router'
import { useContext } from 'react'
import { PokedexContext } from './components/context/PokedexContext'
import { loadData } from './components/data/LoadData'

function App() {

  const {setPokemons} = useContext(PokedexContext)

  useEffect(()=>{
    
    loadData("https://pokeapi.co/api/v2/pokemon",setPokemons) 

  },[])

  return (
    <>
     <Router/>      
    </>
  )
}

export default App
