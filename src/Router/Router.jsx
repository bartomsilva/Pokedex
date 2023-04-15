import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "../Pages/PokemonsListPage/PokemonsListPage";
import { Pokedex } from "../Pages/PokedexPage/PokedexPage";
import { Details } from '../Pages/PokemonDetailPage/PokemonDetailPage'

export function Router() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Home/>}/>
                <Route path='/pokedex' element={<Pokedex/>}/>
                <Route path='/details' element={<Details/>}/>
            </Routes>
        </BrowserRouter>
    )
}