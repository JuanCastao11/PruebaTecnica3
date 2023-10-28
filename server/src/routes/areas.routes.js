import { Router } from "express";

import { Areas } from "../controllers/areasController.js";

const router=Router();

router.get('/areas',Areas);


export default router;