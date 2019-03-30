import mongoose from "../db";
const User = mongoose.model("User");

class UserController {

	async list(req, res) {
		try {
			console.log('UserController LIST!');
			return res.json({ user: [] })
		} catch(err) {
			return res.json({ error: "Ocorreu um erro." })
		}
	}

};

export default new UserController;