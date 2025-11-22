import { Calendar } from 'primereact/calendar';
import { Dropdown } from 'primereact/dropdown';
import { Editor } from 'primereact/editor';
import { InputNumber } from 'primereact/inputnumber';
import { RadioButton } from 'primereact/radiobutton';
import { useState } from 'react';
import { Panel } from 'primereact/panel'
import { Button } from 'primereact/button';
import { addLocale } from 'primereact/api';


function LecturaForm({ crearLectura = () => {} }) {
  const values = [
    {'name': '01', 'code': '01'},
    {'name': '02', 'code': '02'},
    {'name': '03', 'code': '03'},
    {'name': '04', 'code': '04'},
    {'name': '05', 'code': '05'},
    {'name': '06', 'code': '06'},
    {'name': '07', 'code': '07'},
    {'name': '08', 'code': '08'},
    {'name': '09', 'code': '09'},
    {'name': '10', 'code': '10'}
  ];
  const [medidor, setMedidor] = useState(null);
  const [medida, setMedida] = useState(null);
  const [valor, setValor] = useState(null);
  const [text, setText] = useState('');
  const [fecha, setFecha] = useState(null);

  //sacado de  la documentecion de primereact aunque en si no tiene necesidad  para el taller xd
  addLocale('es', {
        firstDayOfWeek: 1,
        showMonthAfterYear: true,
        dayNames: ['domingo', 'lunes', 'martes', 'miércoles', 'jueves', 'viernes', 'sábado'],
        dayNamesShort: ['dom', 'lun', 'mar', 'mié', 'jue', 'vie', 'sáb'],
        dayNamesMin: ['D', 'L', 'M', 'X', 'J', 'V', 'S'],
        monthNames: ['enero', 'febrero', 'marzo', 'abril', 'mayo', 'junio', 'julio', 'agosto', 'septiembre', 'octubre', 'noviembre', 'diciembre'],
        monthNamesShort: ['ene', 'feb', 'mar', 'abr', 'may', 'jun', 'jul', 'ago', 'sep', 'oct', 'nov', 'dic'],
        today: 'Hoy',
        clear: 'Limpiar'
    });
  
  const handleSubmit = () => {
      crearLectura({ 
        medidor, 
        medida, 
        text, 
        fecha, 
        hora: fecha?.toLocaleTimeString('es-ES'), //funcion js para obteener la hora
        valor 
      });
  }

  return (
    <Panel header="Formulario lectura" className='mt-4'>

        <div className="mb-3 d-flex flex-column">
          <div className="mb-3 d-flex flex-column">
            <label htmlFor="calendario" className="font-bold block mb-2">Fecha de la lectura</label>
            <Calendar id="calendario" value={fecha} onChange={(e) => setFecha(e.value)} locale='es' showTime hourFormat="24" dateFormat="dd-mm-yy" ></Calendar>
          </div>
          <div className="mb-3 d-flex flex-column">
            <label htmlFor="dropdown" className="font-bold block mb-2">Selecciona el medidor</label>
            <Dropdown value={medidor} id="dropdown" onChange={(e) => setMedidor(e.value)} options={values}  optionLabel="name"  placeholder="Selecciona un medidor"></Dropdown>
          </div>
          <div className="mb-3 d-flex flex-column">
            <label className="font-bold block mb-2">Tipo de medida</label>
            <div className="d-flex align-items-center">
                  <RadioButton inputId="medida1" name="medida" value="kW" onChange={(e) => setMedida(e.value)} checked={medida === 'kW'} />
                  <label htmlFor="medida1" className="ml-2">KiloWatts</label>
            </div>
            <div className="d-flex align-items-center">
                <RadioButton inputId="medida2" name="medida" value="W" onChange={(e) => setMedida(e.value)} checked={medida === 'W'} />
                <label htmlFor="medida2" className="ml-2">Watts</label>
            </div>
            <div className="d-flex align-items-center">
              <RadioButton inputId="medida3" name="medida" value="C" onChange={(e) => setMedida(e.value)} checked={medida === 'C'} />
              <label htmlFor="medida3" className="ml-2">Temperatura</label>
            </div>
          </div>
          <div className="mb-3 d-flex flex-column">
            <label htmlFor="valorid" className="font-bold block mb-2">Valor medido</label>
            <InputNumber inputId='valorid' min={1} max={500} value={valor} onValueChange={(e) => setValor(e.value)}></InputNumber>
          </div>
          <div className="mb-3 d-flex flex-column">
          <Editor placeholder="Escribe la direccion del medidor" value={text} onTextChange={(e) => setText(e.htmlValue)} style={{ height: '320px' }}></Editor>
          </div>
          <Button label="Guardar lectura" icon="pi pi-check" onClick={handleSubmit} />
        </div>



      
      
      
      
      
    </Panel>
  )
}

export default LecturaForm