import { Router } from "express";

import { RecibirRoles } from "../controllers/rolesController.js";

const router=Router();

router.get('/roles',RecibirRoles);


export default router;