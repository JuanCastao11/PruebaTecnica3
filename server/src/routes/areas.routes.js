import { Router } from "express";

import { MostrarArea } from "../controllers/areaS.controller";

const router = Router();

router.get('/area',MostrarArea);

export default router;