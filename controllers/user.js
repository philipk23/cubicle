const userModel = require('../models/user');
const config = require('../config/config');
const jwt = require('jsonwebtoken');
const user = require('../models/user');
const promisify = require('util').promisify;
const signToken = promisify(jwt.sign)
const { jwtSecret, authCookieName } = config;


module.exports = {
    getRegister(_, res){
        res.render('register');
    },
    postRegister(req, res, next){
        const { username, password, repeatPassword } = req.body;
        if(password !== repeatPassword){
            res.render('register', { errorMessage: 'Passwords don\'t match!' });
            return;
        };

        userModel.create({ username, password })
            .then(() => {
                res.redirect('/login');
            })
            .catch(next);
    },
    getLogin(_, res){
        res.render('login');
    },
    postLogin(req, res, next){
        const { username, password } = req.body;

        userModel.findOne({ username })
            .then(user => Promise.all([user, user ? user.comparePasswords(password) : false]))
            .then(([user, match]) => {
                if(!match){
                    res.render('login', { errorMessage: 'Username or password is incorrect!'});
                    return;
                };
                return signToken({ userId: user._id }, jwtSecret);
            })
            .then(jwtToken => {
                res.cookie(authCookieName, jwtToken, { httpOnly: true});
                res.redirect('/');
            })
            .catch(next);
    },
    getLogout(_, res){
        res.clearCookie(authCookieName);
        res.redirect('/');
    }
}