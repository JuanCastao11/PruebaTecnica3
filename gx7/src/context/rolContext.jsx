import { createContext, useContext, useState } from 'react';
import { recibirRol } from '../api/roles.js'

const RolesContext = createContext();

export const useRoles = () => {
    const context = useContext(RolesContext);
    if(!context) {
        throw new Error('Error')
    }
    return context;
};

export function RolesProvider({children}) {
    const [roles,setRoles] = useState([]);

    const recibirRoles = async () => {
        try {
            const res = await recibirRol();
            setRoles(res.data);
            console.log(res);
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <RolesContext.Provider value={{
            roles,recibirRoles
        }}>
            {children}

        </RolesContext.Provider>
    );
}