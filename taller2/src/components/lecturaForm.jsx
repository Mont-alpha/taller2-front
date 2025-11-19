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
    {'name': 'N° 1', 'code': 1},
    {'name': 'N° 2', 'code': 2},
    {'name': 'N° 3', 'code': 3},
    {'name': 'N° 4', 'code': 4},
    {'name': 'N° 5', 'code': 5},
    {'name': 'N° 6', 'code': 6},
    {'name': 'N° 7', 'code': 7},
    {'name': 'N° 8', 'code': 8},
    {'name': 'N° 9', 'code': 9},
    {'name': 'N° 10', 'code': 10}
  ];
  const [medidor, setMedidor] = useState(null);
  const [medida, setMedida] = useState(null);
  const [valor, setValor] = useState(null);
  const [text, setText] = useState('');
  const [fecha, setFecha] = useState(null);

  
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

      // fecha: solo fecha (sin hora), hora: string HH:MM:SS
      const fechaSinHora = fecha
        ? fecha.toLocaleDateString('es-ES', { day: '2-digit', month: '2-digit', year: 'numeric' })
        : null;
      const hora = fecha ? fecha.toTimeString().split(' ')[0] : '';
      console.log(`medidor: ${medidor}
      medida: ${medida}
      valor: ${valor}
      text: ${text}
      fecha: ${fechaSinHora}
      hora: ${hora}`);
      
      crearLectura({ medidor, medida, text, fecha: fechaSinHora,hora,valor: valor+ " " + medida });
      // Limpiar el formulario después de guardar
      setMedidor(null);
      setMedida(null);
      setValor(null);
      setText('');
      setFecha(null);
  }

  return (
    <Panel header="Formulario lectura" className='mt-4'>

        <div className="mb-3 d-flex flex-column">
          <div className="mb-3 d-flex flex-column">
            <label htmlFor="calendario" className="font-bold block mb-2">Fecha de la lectura</label>
            <Calendar id="calendario" value={fecha} onChange={(e) => setFecha(e.value)} locale='es' showTime hourFormat="24" ></Calendar>
          </div>
          <div className="mb-3 d-flex flex-column">
            <label htmlFor="dropdown" className="font-bold block mb-2">Selecciona el medidor</label>
            <Dropdown value={medidor} id="dropdown" onChange={(e) => setMedidor(e.value)} options={values}  optionLabel="name"  placeholder="Selecciona un medidor"></Dropdown>
          </div>
          <div className="mb-3 d-flex flex-column">
            <label className="font-bold block mb-2">Tipo de medida</label>
            <div className="d-flex align-items-center">
                  <RadioButton inputId="ingredient1" name="medida" value="kW" onChange={(e) => setMedida(e.value)} checked={medida === 'kW'} />
                  <label htmlFor="ingredient1" className="ml-2">KiloWatts</label>
            </div>
            <div className="d-flex align-items-center">
                <RadioButton inputId="ingredient2" name="medida" value="W" onChange={(e) => setMedida(e.value)} checked={medida === 'W'} />
                <label htmlFor="ingredient2" className="ml-2">Watts</label>
            </div>
            <div className="d-flex align-items-center">
              <RadioButton inputId="ingredient3" name="medida" value="C" onChange={(e) => setMedida(e.value)} checked={medida === 'C'} />
              <label htmlFor="ingredient3" className="ml-2">Temperatura</label>
            </div>
          </div>
          <div className="mb-3 d-flex flex-column">
            <label htmlFor="valorid" className="font-bold block mb-2">Valor medido</label>
            <InputNumber inputId='valorid' min={0} max={100} value={valor} onValueChange={(e) => setValor(e.value)}></InputNumber>
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