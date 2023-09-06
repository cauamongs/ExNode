import './App.css'
import Menu from './components/Menu'
import Rodape from './components/Rodape'
import {Outlet} from 'react-router-dom'

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