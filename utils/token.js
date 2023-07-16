const jwt = require('jsonwebtoken');

const config = require('../config/commonConfig');

function generateToken(username){
    return  jwt.sign({
        username: username
    }, config.secretModule.secretKey, {expiresIn: '1h'});
}

function validateToken(token){
    try {
        return jwt.verify(token, config.secretModule.secretKey);
    } catch (error) {
        return false;
    }
}

module.exports = {generateToken};
