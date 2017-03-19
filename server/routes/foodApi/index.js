const express = require('express')
const Router = express.Router()
const passport = require(__base + 'config/passport')

const getById = require('./handlers/getById')
const deleteById = require('./handlers/deleteById')
const updateById = require('./handlers/updateById')
const getAllItems = require('./handlers/getAllItems')
const addItem = require('./handlers/addItem')

Router.use(passport.authenticate('jwt', { session: false }))
// now afer getting authorization, user can access the following endpoints
Router.get('/:id', getById)
Router.delete('/:id', deleteById)
Router.put('/:id', updateById)
Router.get('/', getAllItems)
Router.post('/', addItem)

module.exports = Router
