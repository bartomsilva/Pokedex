import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Header } from "../Components/Header/Header";
import { PokemonListPage } from "../Pages/PokemonsListPage/PokemonsListPage";
import { PokedexPage } from "../Pages/PokedexPage/PokedexPage";
import { PokemonDetailPage } from '../Pages/PokemonDetailPage/PokemonDetailPage'
import { PageNotFound } from "../Pages/notFound/notFound";

export function Router() {
    return (
        <BrowserRouter>
            <Header/>
            <Routes>
                <Route path='/' element={<PokemonListPage/>}/>
                <Route path='/pokedex' element={<PokedexPage/>}/>
                <Route path='/details/:namePokemon' element={<PokemonDetailPage/>}/>
                <Route path="*" element={<PageNotFound/>}/>
            </Routes>
        </BrowserRouter>
    )
}