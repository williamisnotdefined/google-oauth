import { Router } from "express";
const router = Router();

import passport from "passport";

router.get('/google', passport.authenticate('google', {
    scope: ['profile']
}));


router.get('/google/callback', function (req, res) {
	console.log("you reached the redirect URI");
});

export default router;