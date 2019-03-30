import { Strategy, ExtractJwt } from "passport-jwt";

const opts = {
	jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
	secretOrKey: 'SECRET_KEY', /// colcoar no process env
	expiresIn: 120 // 2 min
};

export default () => (
	new Strategy(opts, (jwt_payload, done) => {
		// TODO
		console.log(
			'jwt_payload: ', jwt_payload
		);
		// if (jwt_payload === "paul@nanosoft.co.za") {
		// 	return done(null, true)
		// }
		return done(null, false)
	})
);