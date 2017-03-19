const express = require('express')
const Router = express.Router()
const passport = require(__base + 'config/passport')

const register = require('./handlers/register')
const login = require('./handlers/login')

Router.use(passport.initialize())

Router.post('/register', register)
Router.post('/login', passport.authenticate('local', { session: false }), login)

module.exports = Router
