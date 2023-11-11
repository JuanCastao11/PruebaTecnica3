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

    const actualizarEmpleados = async (id, formData) =>{
        try {
            const res = await actualizarEmpleado(id, formData);
            console.log(res);
            setEmpleados([...empleados, res.data]);
        } catch (error) {
            console.log(error)
            
        }
    }

    const eliminarEmpleados = async (empleadoId) => {
        try {
            const res = await eliminarEmpleado (empleadoId);
            setEmpleados(empleados.filter(empleado=>empleado.id !== empleadoId));
            console.log(res);
        } catch (error) {
            console.log(error) 
        }
    }
    return (
        <EmpleadoContext.Provider value={{
            empleados,mostrarEmpleado,añadirEmpleados,actualizarEmpleados,eliminarEmpleados
        }}>
            {children}

        </EmpleadoContext.Provider>
    );


}