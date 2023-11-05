import { newContext, useContext, useState } from 'react'
import {AreasRequest} from '../api/areas';

const areasContext = newContext();

export const useAreas = () => {
    const context = useContext(areasContext);
    if(!context){
        throw new Error('Error')
    }
    return context;
}

export function areasProvider({children}) {
    const [areas, setAreas] = useState([]);

    const mostrarAreas = async () => {
        try {
            const res = await AreasRequest();
            const areasId = res.data.map((area) => ({ id: area.id, name: area.name }));
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

