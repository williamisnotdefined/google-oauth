export default (sequelize, DataTypes) => {
	class User extends sequelize.Model { }
	User.init({
		name: DataTypes.STRING,
		email: DataTypes.STRING,
		photo: DataTypes.STRING,
		googleId: DataTypes.STRING
	}, { sequelize });

	User/*.prototype*/.generateToken = ({ id }) => jwt.sign(
		{ id },
		process.env.AUTH_SECRET,
		{ expiresIn: process.env.AUTH_EXPIRES_IN }
	);

	User.sync().then(() => {
		console.log('User sync executed.')
	}).finally(() => {
		sequelize.close();
	});

	return User;
}
