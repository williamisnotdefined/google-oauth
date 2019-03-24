import jwt from "jsonwebtoken";
import { config } from "dotenv";
config();

const authSecret = process.env.AUTH_SECRET;

export default async (req, res, next) => {
	const authHeader = req.headers.authorization

	if (!authHeader) {
		return res.status(401).json({ error: 'Token not provided.' })
	}

	const [bearer, token] = authHeader.split(' ')

	if (!token) {
		return res.status(401).json({ error: 'Wrong token format.' })
	}

	try {
		const { id } = await jwt.verify(token, authSecret);
		req.userId = id;
		return next();
	} catch (err) {
		return res.status(401).json({ error: 'Invalid token.' });
	}
};