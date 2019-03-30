import jwt from "jsonwebtoken";
import { config } from "dotenv";
config();


class SessionController {
	async getToken ({ googleId }) {
		const token = await jwt.sign(
			{ id: googleId },
			process.env.AUTH_SECRET,
			{ expiresIn: process.env.AUTH_EXPIRES_IN }
		);
		return token;
	}
}

module.exports = new SessionController
