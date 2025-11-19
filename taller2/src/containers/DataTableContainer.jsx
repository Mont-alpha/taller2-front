import { useState, useEffect} from 'react'
import { Dropdown } from 'primereact/dropdown';
import { obtenerLecturas,obtenerLecturasPorMedida,eliminarLectura } from '../services/lecturasServices';
import LecturaTable from '../components/lecturaTable';
import Navbar from '../components/navbar';

function DataTableContainer() {
    const [lecturas, setLecturas] = useState([]);
    const values = [
        {'name': 'KiloWatts', 'code': 'kW'},
        {'name': 'Watts', 'code': 'W'},
        {'name': 'Temperatura', 'code': 'C'},
    ];
    useEffect(() => {
        const lecturasObtenidas = obtenerLecturas();
        setLecturas(lecturasObtenidas);
    }, []);

    const handleChangeMedida = (medida) => {
        const lecturasFiltradas = obtenerLecturasPorMedida(medida);
        setLecturas(lecturasFiltradas);
    }
    const handleEliminar = (id) => {
        eliminarLectura(id);
        const lecturasActualizadas = obtenerLecturas();
        setLecturas(lecturasActualizadas);
    }


    return (
        <div>
            <Navbar />          
            <div className='mt-2 container'>
                <Dropdown id="dropdown" onChange={(e) => handleChangeMedida(e.value)} options={values}  optionLabel="name"  placeholder="Selecciona el tipo de medida"></Dropdown>
                <LecturaTable lecturas={lecturas} onEliminar={handleEliminar} />
            </div>
        </div>
    )
}

export default DataTableContainer