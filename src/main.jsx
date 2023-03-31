import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { BrowserRouter } from 'react-router-dom'
import Base from './styles/base'
import Reset from './styles/Reset'
import PokedexProvider from './components/context/PokedexContext'

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Reset />
    <Base />
    <PokedexProvider>
      <App />
    </PokedexProvider>
  </BrowserRouter>,
)
