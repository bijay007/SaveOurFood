const express = require('express')
const router = express.Router()

const getById = require('./handlers/getById')
const deleteById = require('./handlers/deleteById')
const updateById = require('./handlers/updateById')

router.get('/:id', getById)
router.delete('/:id', deleteById)
router.put('/:id', updateById)

module.exports = router
