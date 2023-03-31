import { createContext, useState } from "react";
export const PokedexContext = createContext()

export default function PokedexProvider({ children }) {

  // all pokemons
  const [pokemons, setPokemons] = useState([])
  
    const context = {
    pokemons,
    setPokemons,

  }
  
  return (
    <PokedexContext.Provider value={context}>
      {children}
    </PokedexContext.Provider>
  )
}