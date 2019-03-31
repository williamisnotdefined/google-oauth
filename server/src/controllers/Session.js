import jwt from "jsonwebtoken";
import { config } from "dotenv";
config();


class SessionController {

	async init (req, res) {
		const token = await Session.getToken(req.user);
		res.json({ user: req.user, token })
	}

	async getToken (user) {
		const token = await jwt.sign(
			{ id: user.googleId },
			process.env.AUTH_SECRET,
			{ expiresIn: process.env.AUTH_EXPIRES_IN }
		);
		return token;
	}
}

module.exports = new SessionController
