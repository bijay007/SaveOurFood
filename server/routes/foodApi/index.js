const express = require('express')
const router = express.Router()
const passport = require(__base + 'config/passport')

const getAllItems = require('./handlers/getAllItems')
const addItem = require('./handlers/addItem')
const deleteById = require('./handlers/deleteById')
const updateById = require('./handlers/updateById')
// const getById = require('./handlers/getById')

router.use(passport.authenticate('jwt', { session: false }))
// now afer getting authorization, user can access the following endpoints
router.delete('/:id', deleteById)
router.put('/:id', updateById)
router.get('/:id', getAllItems)
router.post('/', addItem)
// router.get('/:id', getById)

module.exports = router
