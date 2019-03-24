import jwt from "jsonwebtoken";
import { config } from "dotenv";
config();

export default (sequelize, DataTypes) => {
	const User = sequelize.define('User', {
		name: DataTypes.STRING,
		email: DataTypes.STRING
	});

	User.prototype.generateToken = ({ id }) => jwt.sign(
		{ id },
		process.env.AUTH_SECRET,
		{
			expiresIn: process.env.AUTH_EXPIRES_IN
		}
	);

	return User;
}
