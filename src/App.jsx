import { Router } from './components/router/Router'
import { GlobalContext } from './components/context/GlobalContext'
import { GlobalState } from './components/context/GlobalState'
import GlobalStyled from './styles/GlobalStyled'

function App() {

  const context = GlobalState()

  return (
    <div>
      <GlobalStyled/>
      <GlobalContext.Provider value={context}>
        <Router />
      </GlobalContext.Provider>
    </div>
  )
}

export default App
