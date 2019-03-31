import mongoose from "../db";
const User = mongoose.model("User");

class UserController {

	async list(req, res) {
		try {
			console.log('UserController LIST!');
			const users = await User.find();
			console.log('users:' , users)
			return res.json({
				users: users //users.map(({ name, photo }) => ({ name, photo }))
			});
		} catch (err) {
			return res.json({ error: err, msg: "Ocorreu um erro." })
		}
	}

};

export default new UserController;