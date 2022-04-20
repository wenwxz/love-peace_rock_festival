const passport = require("passport");
const GoogleStrategy = require("passport-google-oauth20").Strategy;
require('dotenv').config();


passport.use(new GoogleStrategy({
    
    clientID: process.env.GOOGLE_ID,
    clientSecret: process.env.GOOGLE_PASSWORD,
    callbackURL: "http://localhost:3400/auth/google/callback"
},
function (accessToken, refreshToken, profile, done) {
    done(null, profile);       
}
));



passport.serializeUser((user, done) => {
    done(null, user);
})

passport.deserializeUser((user, done) => {
    done(null, user);   
})




