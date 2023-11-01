import { Router } from "express";

import  { añadirEmpleado , mostrarEmpleados , eliminarEmpleado ,actualizarEmpleado} from '../controllers/empleadoController.js'
import {validateSchema} from '../middleware/validator.js'
import {añadirEmpleados} from '../schemas/empleados.js'

const router = Router();

router.get('/empleados',mostrarEmpleados);
router.get('/empleados/:id',mostrarEmpleados);
router.post('/empleados' ,añadirEmpleado);
router.put('/empleados/:id',actualizarEmpleado);
router.delete('/empleados/:id',eliminarEmpleado);

export default router;