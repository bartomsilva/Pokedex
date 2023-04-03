import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "../../pages/home/Home";
import { Pokedex } from "../../pages/pokedex/Pokedex";

export function Router( props ) {

    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Home props={props} />} />
                <Route path='/pokedex' element={<Pokedex props={props} />}/>
            </Routes>
        </BrowserRouter>
    )
}