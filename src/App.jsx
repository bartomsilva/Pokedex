import { Router } from './components/router/Router'
import { GlobalContext } from './components/context/GlobalContext'
import { GlobalState } from './components/context/GlobalState'
import GlobalStyled from './styles/GlobalStyled'
import { Modal } from './components/modal/Modal'
function App() {

  const context = GlobalState()

  return (
    <div>
      <GlobalStyled />
      <GlobalContext.Provider value={context}>
        <Router />
        {context.modal ? document.documentElement.style.overflow = 'clip'
                       : document.documentElement.style.overflow = 'visible'
        }
        {context.modal ? <Modal action={context.action} /> : ''}

      </GlobalContext.Provider>
    </div>
  )
}

export default App
