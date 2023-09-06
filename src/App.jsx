import './App.css'
import {Outlet} from 'react-router-dom'
import Menu from './components/Menu'
import Rodape from './components/Rodape'

function App(){

  return(
    <>
      <Outlet/>
      <Menu/>
      <Rodape/>
    </>
  )
}
export default App