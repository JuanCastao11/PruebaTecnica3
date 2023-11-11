import { createContext, useContext, useState } from 'react'
import {AreasRequest} from '../api/areas';

const areasContext = createContext();

export const useAreas = () => {
    const context = useContext(areasContext);
    if(!context){
        throw new Error('EuseAreas must be used within a AreasProvider')
    }
    return context;
}

export function AreasProvider({children}) {
    const [areas, setAreas] = useState([]);

    const mostrarAreas = async () => {
        try {
            const res = await AreasRequest();
            const areasId = res.data.map((area) => ({ id: area.id, nombre: area.nombre }));
            setAreas(areasId);
            console.log(res);
        } catch (error) {
            console.log(error);
            
        }
    }
    
    return(
        <areasContext.Provider value={{
            areas, mostrarAreas
        }}>

            {children}
        </areasContext.Provider>
        )
}

