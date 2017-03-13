const express = require('express')
const router = express.Router()

const getAllItems = require('./handlers/getAllItems')
const addItem = require('./handlers/addItem')

router.get('/', getAllItems)
router.post('/', addItem)

module.exports = router
