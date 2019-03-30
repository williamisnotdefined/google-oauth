import jwt from "jsonwebtoken";
import { config } from "dotenv";
config();


class SessionController {
	getToken (user) {
		return jwt.sign(
			{ id: user.googleId },
			process.env.AUTH_SECRET,
			{ expiresIn: process.env.AUTH_EXPIRES_IN }
		);
	}
}

module.exports = new SessionController
