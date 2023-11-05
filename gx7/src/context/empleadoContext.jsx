import { createContext, useContext, useState } from 'react';
import { mostrarEmpleados,añadirEmpleado,actualizarEmpleado,eliminarEmpleado } from '../api/empleados.js'

const EmpleadoContext = createContext();

export const useEmpleados = () => {
    const context = useContext(EmpleadoContext);
    if (!context) {
        throw new Error('Error')
    }
    return context;
};

export function EmpleadoProvider({children}){
    const [empleados,setEmpleados] = useState([]);

    const mostrarEmpleado = async () => {
        try {
            const res = await mostrarEmpleados();
            setEmpleados(res.data);
            console.log(res);
        } catch (error) {
            console.log(error);
        }
    }

    const añadirEmpleados = async (newEmpleado) => {
        try {
            const res = await añadirEmpleado(newEmpleado);
            setEmpleados([...empleados, res.data]);
            console.log(res);
        } catch (error) {
            console.log(error)
        }
    }
    return (
        <EmpleadoContext.Provider value={{
            empleados,mostrarEmpleado,añadirEmpleados
        }}>
            {children}

        </EmpleadoContext.Provider>
    );


}