const passport = require('passport')
const localStrategy = require("passport-local").Strategy;
const bcrypt = require("bcrypt");
const models = require("../models");

// const initialize = (passport, getUserByEmail) =>{
    const authenticateUser = async (email, password, done) =>{
        
        // console.log("hello user auth")
        // console.log(email, password);
        const user = await models.User.findOne({email})
        // const user = getUserByEmail(email)
        if(user == null){
            // console.log("no user")
            return done(null, false, {message: "No user on file with the provided e-mail."})
        }try{
            // console.log(email)
            // const hashedPassword = await bcrypt.hash(password, 10);
            console.log(user)
            console.log(password, user.password);
            if(bcrypt.compare(password, user.password)){
                console.log("success")
                return done(null, user)
        }else{
            console.log("bad password")
            return done(null, false, {message: "Incorrect password provided"});
        }
        }catch(err){
            return done(err)
        }
    }
    passport.use(new localStrategy({usernameField: "email"},authenticateUser));
    passport.serializeUser((user, done) =>{})
    passport.deserializeUser((id, done) =>{})
// };

module.exports = passport