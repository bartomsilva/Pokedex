import { createContext, useState } from "react";
export const PokedexContext = createContext()

export default function PokedexProvider({ children }) {

  // all pokemons
  const [pokemons, setPokemons] = useState([])
  const [pokedex, setPokedex] = useState([])
  const [validPokemons, setValidPokemons]=useState([])

  const context = {
    pokemons,
    setPokemons,
    pokedex,
    setPokedex,
    validPokemons,
    setValidPokemons
  }

  return (
    <PokedexContext.Provider value={context}>
      {children}
    </PokedexContext.Provider>
  )
}