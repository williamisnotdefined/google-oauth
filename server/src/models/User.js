import mongoose from "mongoose";
import jwt from "jsonwebtoken";

const UserSchema = new mongoose.Schema({
	name: {
		type: String,
		require: true
	},
	googleId: {
		type: String,
		require: true
	},
	photo: {
		type: String,
		require: true
	},
	createdAt: {
		type: Date,
		default: Date.now
	}
});

UserSchema.methods = {
	generateToken() {
		return jwt.sign({ id: this.id }, "secret", {
			expiresIn: 86400
		});
	}
};

mongoose.model("User", UserSchema);
