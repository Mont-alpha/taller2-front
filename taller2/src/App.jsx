import Home from './pages/home'
import { Routes, Route, BrowserRouter } from 'react-router-dom'
import Lecturas from './pages/Lecturas'
import NuevaLectura from './pages/NuevaLectura'


function App() {


  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/mediciones' element={<Lecturas />} />
        <Route path='/nueva_medicion' element={<NuevaLectura />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
