import { Router } from "express";

import  { añadirEmpleado , obtenerEmpleados , eliminarEmpleado ,actualizarEmpleado} from '../controllers/empleadoController.js'
import {validateSchema} from '../middleware/validator.js'
import {añadirEmpleados} from '../schemas/empleados.js'

const router = Router();

router.get('/empleados',obtenerEmpleados);
router.get('/empleados/:id',obtenerEmpleados);
router.post('/empleados' ,añadirEmpleado);
router.put('/empleados/:id',actualizarEmpleado);
router.delete('/empleados/:id',eliminarEmpleado);

export default router;