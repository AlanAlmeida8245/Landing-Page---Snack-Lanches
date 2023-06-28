import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Navbar from './Components/Navbar/Navbar'
import ImageHeader from './Components/ImagepPrincipal/ImageHeader'
import EspecialidadesLanchonete from './Components/Especialidades/Especialidades'
import Cardapio from './Components/Cardapio/Cardapio'
import Map from './Components/Map/Map'
import Footer from './Components/Footer/Footer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar />
      <ImageHeader/>
      <EspecialidadesLanchonete/>
      <Cardapio />
      <Map />
      <Footer/>
    </>
  )
}

export default App
