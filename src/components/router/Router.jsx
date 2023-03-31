import { Routes, Route } from 'react-router-dom'
import Home from '../../pages/Home'
import Pokedex from '../../pages/Pokedex'
import Details from '../../pages/Details'
import About from '../../pages/About'

export default function Router() {
    return (
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path="/pokedex" element={<Pokedex />} />
            <Route path="/info" element={<Details />} />
            <Route path="/about" element={<About />} />
        </Routes>
    )
}