import {z} from 'zod';

export const añadirEmpleados = z.object({
    nombre: z.string({
        required_error:"Es necesario que agregue su nombre"
    }),
    email: z.string({
        required_error:"Es necesario su email"
    }),
    sexo: z.string({
        required_error:"Es necesario que nos diga su sexo"
    }),
    area_id: z.number({
        required_error:"Es necesario agregar su area"
    }),
    boletin: z.number({
        required_error:"Es necesario agregar el boletin"
    }),
    descripcion: z.string({
        required_error:"Es necesario una descripcion"
    })
})