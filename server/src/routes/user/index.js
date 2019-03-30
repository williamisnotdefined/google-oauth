import { Router } from "express";
const router = Router();

import UserController from "../../controllers/User"

router.get("/list", UserController.list);

export default router;