import mongoose from "mongoose";

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

mongoose.model("User", UserSchema);
