import jwt from "jsonwebtoken";
import { config } from "dotenv";
config();

const generateToken = async (user) => {
	const token = await jwt.sign(
		{ id: user.googleId },
		process.env.AUTH_SECRET,
		{ expiresIn: process.env.AUTH_EXPIRES_IN }
	);
	return token;
}

class SessionController {

	async init (req, res) {
		const token = await generateToken(req.user);
		res.render('popup_google/index', { user: req.user, token })
	}

}

module.exports = new SessionController
