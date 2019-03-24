import passport from "passport";
import { Strategy as GoogleStrategy } from "passport-google-oauth20";

import { config } from "dotenv";
config();

export default () => {
    passport.use(
        new GoogleStrategy({
            // options for google strategy
            clientID: process.env.GOOGLE_CLIENT_ID,
            clientSecret: process.env.GOOGLE_SECRET_KEY,
            callbackURL: '/auth/google/redirect'
        }, (accessToken, refreshToken, profile, done) => {
            // passport callback function
            console.log('passport callback function fired:');
            console.log(profile);
        })
    );
};