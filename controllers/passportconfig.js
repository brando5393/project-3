// const localStrategy = require("passport-local").Strategy;
// const bcrypt = require("bcrypt");
// const models = require("../models");

// const initialize = (passport, getUserByEmail) =>{
//     const authenticateUser = async (email, password, done) =>{
//         const user = getUserByEmail(email)
//         if(user == null){
//             return done(null, false, {message: "No user on file with the provided e-mail."})
//         }try{
//             if(await bcrypt.compare(password, models.User.find({password}) )){
//                 return done(null, user)
//         }else{
//             return done(null, false, {message: "Incorrect password provided"});
//         }
//         }catch(err){
//             return done(err)
//         }
//     }
//     passport.use(new localStrategy({usernameField: "email"}), authenticateUser);
//     // store logged in users id to the session
//     // find out why models is not showing up as valid
//     passport.serializeUser((user, done) => done(null,{models.User.find({_id})}));
//     passport.deserializeUser((id, done) =>{return done(null, getUserById(id))})
// };

// module.exports = initialize