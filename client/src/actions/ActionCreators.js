/**
 * Created by j on 2/7/17.
 */
const {
    AUTH_SET_TOKEN,
    AUTH_DISCARD_TOKEN,
    AUTH_SET_USER
} = require('./constants.js');

function authSetToken(token){
    return {
        type: AUTH_SET_TOKEN,
        token
    };
}

function authDiscardToken(){
    return {
        type: AUTH_DISCARD_TOKEN
    };
}

function authSetUser(user){
    return {
        type: AUTH_SET_USER,
        user
    };
}

module.exports = {
    authSetToken,
    authDiscardToken,
    authSetUser
}
