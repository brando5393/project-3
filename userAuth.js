const bcrypt = require('bcrypt');
const passport = require('passport');
const models = require('./models/index');

const hashPassword = password =>{
    bcrypt.genSalt(10, (err, salt) =>{
        bcrypt.hash(password, salt, (err, hash) =>{
            if(err){
                throw err;
            }else{
                // send hashed password to db
            };
        });
    });
};

const checkPassword = password =>{
    bcrypt.compare(password, hash, (err, result) => {
        if(err){
            throw err;
        }else{
            // compare password and hash if match login else reject
        };
    });
};

module.exports = {
    hashPassword: hashPassword,
    checkPassword: checkPassword
}