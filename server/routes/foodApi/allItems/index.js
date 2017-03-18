const express = require('express')
const Router = express.Router()
const passport = require(__base + '/config/passport')

const getAllItems = require('./handlers/getAllItems')
const addItem = require('./handlers/addItem')

Router.use(passport.authenticate('jwt', { session: false }))
// now afer getting authorization, user can use following endpoints
Router.get('/', getAllItems)
Router.post('/', addItem)

module.exports = Router
