import passport from "passport";
import { config } from "dotenv";
config();

passport.serializeUser((user, done) => {
    console.log('serializeUser! user: ', user);
    done(null, user.googleId);
});

passport.deserializeUser(async (id, done) => {
    console.log('deserializeUser!');
    const user = await User.findOne({googleId: id});
    done(null, user);
});

import GoogleStrategy from "./google";

export default () => {
    passport.use(
        GoogleStrategy()
    );
};