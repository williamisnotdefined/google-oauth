import passport from "passport";
import { Strategy as GoogleStrategy } from "passport-google-oauth20";

import { config } from "dotenv";
config();

export default () => {
    passport.use(
        new GoogleStrategy({
            clientID: process.env.GOOGLE_CLIENT_ID,
            clientSecret: process.env.GOOGLE_SECRET_KEY,
            callbackURL: '/auth/google/redirect'
        }, (accessToken, refreshToken, profile, done) => {
            /*
                TODO:
                criar usuário ou logar
            */
        })
    );
};