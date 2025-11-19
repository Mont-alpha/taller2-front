import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { Button } from 'primereact/button';


import { use, useState, useEffect } from 'react';

function LecturaTable({ lecturas, onEliminar = () => {} }) {



    const medidor = (rowData) => {
        return rowData.medidor ? rowData.medidor.name : '';
    };

    const accion = (rowData) => {
        return <Button label="Eliminar" severity="danger" onClick={() => onEliminar(rowData.id)} />;
    };
    
  return ( 
    <div>
        <div className="card mt-2">
            <DataTable value={lecturas} tableStyle={{ minWidth: '50rem' }}>
                <Column field="fecha" header="Fecha" ></Column>
                <Column field="hora" header="Hora"></Column>
                <Column field="medidor" header="Medidor" body={medidor}></Column>
                <Column field="valor" header="Valor"></Column>
                <Column header="Acciones" body={accion}></Column>
            </DataTable>
        </div>

    </div>

  )
}

export default LecturaTable