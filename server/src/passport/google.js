import { Strategy } from "passport-google-oauth20";
import { config } from "dotenv";
config();



import mongoose from "../db";
const User = mongoose.model("User");

export default () => (
	new Strategy({
		clientID: process.env.GOOGLE_CLIENT_ID,
		clientSecret: process.env.GOOGLE_SECRET_KEY,
		callbackURL: '/auth/google/redirect'
	}, async (accessToken, refreshToken, profile, done) => {

		const { displayName, id, photos } = profile;
		const photo = photos.length > 0 ? photos[0].value : null

		let user = await User.findOne({ googleId: id });

		if (!user) {
			user = await User.create({
				name: displayName,
				googleId: id,
				photo
			});
		}

		done(null, user);

	})
)