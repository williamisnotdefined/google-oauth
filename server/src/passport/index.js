import passport from "passport";
import { config } from "dotenv";
config();

import GoogleStrategy from "./google";

export default () => {
    passport.use(
        GoogleStrategy()
    );
};