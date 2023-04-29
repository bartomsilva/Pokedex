import GlobalStyled from './styles/GlobalStyled'
import { Router } from './Router/Router'
import { GlobalContext } from './Global/GlobalStateContext'
import { GlobalState } from './Global/GlobalState'
import { Modal } from './Components/Modal/Modal'

function App() {

  const context = GlobalState()

  return (
    <>
      <GlobalStyled />
      <GlobalContext.Provider value={context}>
        <Router/>
        {context.modal && <Modal action={context.action} />}
      </GlobalContext.Provider>
    </>
  )
}

export default App
