const express = require('express')
const router = express.Router()
const passport = require(__base + 'config/passport')

const getById = require('./handlers/getById')
const deleteById = require('./handlers/deleteById')
const updateById = require('./handlers/updateById')
const getAllItems = require('./handlers/getAllItems')
const addItem = require('./handlers/addItem')

router.use(passport.authenticate('jwt', { session: false }))
// now afer getting authorization, user can access the following endpoints
router.get('/:id', getById)
router.delete('/:id', deleteById)
router.put('/:id', updateById)
router.get('/', getAllItems)
router.post('/', addItem)

module.exports = router
