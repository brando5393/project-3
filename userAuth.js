const bcrypt = require('bcrypt');
const passport = require('passport');
const models = require('./models/index');

const hashPassword = password =>{
    bcrypt.genSalt(10, (err, salt) =>{
        bcrypt.hash(password, salt, (err, hash) =>{
            // send hashed password to db
        });
    });
};

module.exports = {
    hashPassword: hashPassword

}