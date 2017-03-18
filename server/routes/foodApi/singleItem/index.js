const express = require('express')
const Router = express.Router()
const passport = require(__base + '/config/passport')

const getById = require('./handlers/getById')
const deleteById = require('./handlers/deleteById')
const updateById = require('./handlers/updateById')

Router.use(passport.authenticate('jwt', { session: false }))
  // now afer getting authorization, user can use following endpoints
Router.get('/:id', getById)
Router.delete('/:id', deleteById)
Router.put('/:id', updateById)

module.exports = Router
