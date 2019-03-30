import { Router } from "express";
const router = Router();

import passport from "passport";
import Session from "../../controllers/Session";

router.get("/google", passport.authenticate('google', {
    scope: ['profile']
}));


router.get("/google/redirect", passport.authenticate("google"), async (req, res) => {
	console.log('i am in auth/google/redirect');
	const token = await Session.getToken(req.user);
	res.json({user: req.user, token})
});

export default router;