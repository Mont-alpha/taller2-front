import React, { useRef } from 'react'
import Navbar from '../components/navbar'
import LecturaForm from '../components/lecturaForm'
import { eliminarLectura,obtenerLecturas,guardarLectura } from '../services/lecturasServices'
import { Toast } from 'primereact/toast';

function LecturaContainer() {
    const toast = useRef(null);
    const handleCrearLectura = (lectura) => {
        if (!lectura) {
            toast.current.show({severity:'error', summary: 'Error', detail: 'Lectura inválida', life: 3000});
            return;
        };
        if (!lectura.medidor || !lectura.medida || !lectura.valor || !lectura.fecha) {
            toast.current.show({severity:'error', summary: 'Error', detail: 'Faltan campos obligatorios', life: 3000});
            return;
        }
        toast.current.show({severity:'success', summary: 'Éxito', detail: 'Lectura guardada correctamente', life: 3000});
        guardarLectura(lectura);
    }
    

    return (
        <div>
            <Toast ref={toast}></Toast>
            <Navbar />
            <LecturaForm crearLectura={handleCrearLectura} />
        </div>
    )
}

export default LecturaContainer