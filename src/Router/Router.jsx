import { BrowserRouter, Routes, Route } from "react-router-dom";
import { PokemonListPage } from "../Pages/PokemonsListPage/PokemonsListPage";
import { PokedexPage } from "../Pages/PokedexPage/PokedexPage";
import { PokemonDetailPage } from '../Pages/PokemonDetailPage/PokemonDetailPage'

export function Router() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<PokemonListPage/>}/>
                <Route path='/pokedex' element={<PokedexPage/>}/>
                <Route path='/details/:namePokemon' element={<PokemonDetailPage/>}/>
            </Routes>
        </BrowserRouter>
    )
}