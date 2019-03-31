import mongoose from "mongoose";

const excludeFromQuery = (doc, ret) => {
	delete ret._id;
	delete ret.googleId;
	delete ret.createdAt;
	delete ret.__v;
};

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
}, {
	toObject: {
		transform: excludeFromQuery
	},
	toJSON: {
		transform: excludeFromQuery
	}
});

mongoose.model("User", UserSchema);
