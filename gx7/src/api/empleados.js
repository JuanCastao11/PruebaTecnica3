import axios from './axios.js';

export const mostrarEmpleados = () => axios.get('/empleados');
export const añadirEmpleado = (empleado) => axios.post('/empleados',empleado);
export const actualizarEmpleado = () => axios.put('/empleados');
export const eliminarEmpleado = () => axios.delete('/empleados');

