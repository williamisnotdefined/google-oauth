import { Strategy } from "passport-google-oauth20";
import { User } from "../models";

import { config } from "dotenv";
config();

export default () => (
	new Strategy({
		clientID: process.env.GOOGLE_CLIENT_ID,
		clientSecret: process.env.GOOGLE_SECRET_KEY,
		callbackURL: '/auth/google/redirect'
	}, async (accessToken, refreshToken, profile, done) => {

		const { displayName, id, photos } = profile;
		const photo = photos.length > 0 ? photos[0].value : null

		// console.log('profile: ', profile);
		console.log('User: ', User);

		// const user = await User.findOrCreate({
		// 	where: {
		// 		name: displayName,
		// 		googleId: id,
		// 		photo: photo
		// 	}
		// });

		/*
			TODO:
			criar usuário ou logar
		*/
	})
)