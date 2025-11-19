const key = 'lecturas';

const guardarletura = (lectura) => {
    const localStorageLecturas = localStorage.getItem(key);
    const lecturas = localStorageLecturas ? JSON.parse(localStorageLecturas) : [];
    lecturas.push(lectura);
    localStorage.setItem(key, JSON.stringify(lecturas));
}
const obtenerLecturas = () => {
    const localStorageLecturas = localStorage.getItem(key);
    return localStorageLecturas ? JSON.parse(localStorageLecturas) : [];
}
const eliminarLectura = (id) => {
    const localStorageLecturas = localStorage.getItem(key);
    const lecturas = localStorageLecturas ? JSON.parse(localStorageLecturas) : [];
    const nuevasLecturas = lecturas.filter(lectura => lectura.id !== id);
    localStorage.setItem(key, JSON.stringify(nuevasLecturas));
}

export { guardarletura, obtenerLecturas, eliminarLectura };