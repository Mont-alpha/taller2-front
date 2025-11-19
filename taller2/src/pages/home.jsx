import Navbar from "../components/navbar"
import LecturaForm from "../components/lecturaForm"
import LecturaTable from "../components/lecturaTable"
import { useState, useEffect } from 'react'
import { guardarLectura, obtenerLecturas, eliminarLectura } from '../services/lecturasServices'

function Home() {

  return (
    <div>
      <Navbar />
      
    </div>
  )
}

export default Home