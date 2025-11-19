const key = 'lecturas';

const guardarLectura = (lectura) => {
    const localStorageLecturas = localStorage.getItem(key);
    const lecturas = localStorageLecturas ? JSON.parse(localStorageLecturas) : [];
    const nuevaLectura = { ...lectura, id: Date.now() }; 
    lecturas.push(nuevaLectura);
    localStorage.setItem(key, JSON.stringify(lecturas));
}
const obtenerLecturas = () => {
    const localStorageLecturas = localStorage.getItem(key);
    return localStorageLecturas ? JSON.parse(localStorageLecturas) : [];
}
const obtenerLecturasPorMedida = (medida) => {
    const localStorageLecturas = localStorage.getItem(key);
    const lecturas = localStorageLecturas ? JSON.parse(localStorageLecturas) : [];
    return lecturas.filter(lectura => lectura.medida === medida);
}
const eliminarLectura = (id) => {
    const localStorageLecturas = localStorage.getItem(key);
    const lecturas = localStorageLecturas ? JSON.parse(localStorageLecturas) : [];
    const nuevasLecturas = lecturas.filter(lectura => lectura.id !== id);
    localStorage.setItem(key, JSON.stringify(nuevasLecturas));
}

export { guardarLectura, obtenerLecturas, eliminarLectura, obtenerLecturasPorMedida };