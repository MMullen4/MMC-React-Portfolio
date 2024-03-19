
import { Outlet } from 'react-router-dom'
import mmcLogo from './assets/mmc.svg'
import './App.css'
import Nav from './components/Nav'
// import List from './components/List'

function App() {

  return (
    <>
      <Nav />

      <main className="main-content">

        <Outlet />
      </main>

    </>
  )
}

export default App
