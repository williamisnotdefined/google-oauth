import { Router } from "express";
const router = Router();

import auth from "./auth";
import user from "./user";
import authMiddleware from "../middlewares/auth";

router.use("/auth", auth)

router.use(authMiddleware);

router.use("/user", user)

export default router;