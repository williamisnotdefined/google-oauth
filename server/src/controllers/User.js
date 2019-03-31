import mongoose from "../db";
const User = mongoose.model("User");

class UserController {

	async list(req, res) {
		try {
			console.log('UserController LIST!');
			const users = await User.find();
			return res.json({ users });
		} catch (err) {
			return res.json({ error: err, msg: "Ocorreu um erro." })
		}
	}

};

export default new UserController;