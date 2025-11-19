import Home from './pages/home'
import { Routes, Route, BrowserRouter } from 'react-router-dom'
import LecturaTable from './components/lecturaTable'
import LecturaContainer from './containers/lecturacontainer'
import DataTableContainer from './containers/DataTableContainer'


function App() {


  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/lecturas' element={<DataTableContainer />} />
        <Route path='/nueva-lectura' element={<LecturaContainer />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
