import { useState, useEffect, useRef } from 'react'
import { Dropdown } from 'primereact/dropdown';
import { Button } from 'primereact/button';
import { Toast } from 'primereact/toast';
import { obtenerLecturas, obtenerLecturasPorMedida, eliminarLectura } from '../services/lecturasServices';
import LecturaTable from '../components/lecturaTable';
import Navbar from '../components/navbar';

function DataTableContainer() {
    const [lecturas, setLecturas] = useState([]);
    const [selectedMedida, setSelectedMedida] = useState(null);
    const toast = useRef(null);

    const values = [
        {'name': 'KiloWatts', 'code': 'kW'},
        {'name': 'Watts', 'code': 'W'},
        {'name': 'Temperatura', 'code': 'C'},
    ];

    useEffect(() => {
        cargarLecturas();
    }, []);

    const cargarLecturas = () => {
        const lecturasObtenidas = obtenerLecturas();
        setLecturas(lecturasObtenidas);
    }

    const handleFiltrar = () => {
        if (selectedMedida) {
            const lecturasFiltradas = obtenerLecturasPorMedida(selectedMedida.code);
            setLecturas(lecturasFiltradas);
        } else {
            cargarLecturas();
        }
    }

    const handleEliminar = (id) => {
        eliminarLectura(id);
  
        if (selectedMedida) {
             const lecturasFiltradas = obtenerLecturasPorMedida(selectedMedida.code);
             // Si elimino la lectura la funcion me trae denuevo la lista que staba filtrada
             setLecturas(lecturasFiltradas);
        } else {
            cargarLecturas();
        }
        
        toast.current.show({ severity: 'info', summary: 'Info', detail: 'Lectura eliminada correctamente' });
    }


    return (
        <div>
            <Navbar />
            <Toast ref={toast} />
            <div className='mt-2 container'>
                <div className="flex gap-2 mb-3 align-items-center">
                    <Dropdown 
                        value={selectedMedida} 
                        onChange={(e) => setSelectedMedida(e.value)} 
                        options={values} 
                        optionLabel="name" 
                        placeholder="Selecciona el tipo de medida" 
                        showClear
                        className="mr-2"
                    />
                    <Button label="Filtrar" onClick={handleFiltrar} />
                </div>
                <LecturaTable lecturas={lecturas} onEliminar={handleEliminar} />
            </div>
        </div>
    )
}

export default DataTableContainer