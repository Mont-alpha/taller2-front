import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { Button } from 'primereact/button';


import { use, useState, useEffect } from 'react';

function LecturaTable({ lecturas, onEliminar = () => {} }) {



    const medidor = (rowData) => {
        return rowData.medidor ? rowData.medidor.name : '';
    };
    const valor_medida = (rowData) => {
        return rowData.valor + ' ' + rowData.medida;
    }

    const fecha = (rowData) => {
        return rowData.fecha ? new Date(rowData.fecha).toLocaleDateString('es-ES') : ''; //convierte la fecha del formato 2025-11-22T01:01:00.000Z a uno mas simplificado
    };

    const accion = (rowData) => {
        return <Button label="Descartar Lectura" severity="danger" onClick={() => onEliminar(rowData.id)} />;
    };
    
  return ( 
    <div>
        <div className="card mt-2">
            <DataTable value={lecturas} tableStyle={{ minWidth: '50rem' }}>
                <Column field="fecha" header="Fecha" sortable body={fecha}></Column>
                <Column field="hora" header="Hora"></Column>
                <Column field="medidor" header="Medidor" body={medidor}></Column>
                <Column field="valor" header="Valor" body={valor_medida}></Column>
                <Column header="Acciones" body={accion}></Column>
            </DataTable>
        </div>

    </div>

  )
}

export default LecturaTable