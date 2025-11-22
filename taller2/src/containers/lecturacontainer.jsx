import React, { useRef } from 'react'
import { useNavigate } from 'react-router-dom'
import Navbar from '../components/navbar'
import LecturaForm from '../components/lecturaForm'
import { guardarLectura } from '../services/lecturasServices'
import { Toast } from 'primereact/toast';

function LecturaContainer() {
    const toast = useRef(null);
    const navigate = useNavigate();

    const handleCrearLectura = (lectura) => {

        if (!lectura.medidor || !lectura.medida || !lectura.valor || !lectura.fecha || !lectura.text) {
            toast.current.show({severity:'warn', summary: 'Advertencia', detail: 'Todos los campos son obligatorios', life: 3000});
            return;
        }

        if (lectura.valor <= 0 || lectura.valor > 500) {
            toast.current.show({severity:'warn', summary: 'Advertencia', detail: 'El valor debe ser mayor a 0 y menor o igual a 500', life: 3000});
            return;
        }

        const nuevaLectura = {
            ...lectura,
            fecha: lectura.fecha.toISOString(), // Guardamos como string ISO
        };

        guardarLectura(nuevaLectura);
        
        // Redirige
        navigate('/mediciones');
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