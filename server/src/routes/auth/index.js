import { Router } from "express";
const router = Router();

import passport from "passport";
import Session from "../../controllers/Session";

router.get("/google", passport.authenticate('google', { scope: ['profile'] }));

router.get("/google/redirect", passport.authenticate("google"), Session.init);

export default router;