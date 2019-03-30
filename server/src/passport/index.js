import passport from "passport";
import { config } from "dotenv";
config();

passport.serializeUser((user, done) => {
    done(null, user.id);
});

passport.deserializeUser((id, done) => {
    User.findById(id).then((user) => {
        done(null, user);
    });
});

import GoogleStrategy from "./google";
import JwtStrategy from "./jwt";

export default () => {
    passport.use(
        JwtStrategy(),
        GoogleStrategy()
    );
};