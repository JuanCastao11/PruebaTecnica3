import { Router } from "express";

import { obtenerRol } from "../controllers/roles.controller";

const router=Router();

router.get('/roles',obtenerRol);


export default router;