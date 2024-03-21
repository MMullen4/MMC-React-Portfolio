
import { Outlet } from 'react-router-dom'
// import mmcLogo from './assets/mmc.svg'
import './App.css'
import Nav from './components/Nav'



// App componet is the main component that will be used to render the Nav component and the Outlet component.
function App() {
  return (
    <>
      {/* // Nav component renders the navigation bar. */}
      <Nav /> 
      {/* // Form component renders the form. */}
      
      <main className="main-content">
        {/* Outlet is a component that will be used to render the children of the router. */}
        <Outlet /> 
       
      </main>
    </>
  )
}

export default App
