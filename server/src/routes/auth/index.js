import { Router } from "express";
const router = Router();

import passport from "passport";

router.get("/google", passport.authenticate('google', {
    scope: ['profile']
}));


router.get("/google/redirect", passport.authenticate("google"), (req, res) => {
	console.log("you reached the redirect URI");
	console.log('i am in auth/google/redirect');
});

export default router;