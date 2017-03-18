const express = require('express')
const Router = express.Router()

const getPost = require('./allItems')
const updateDel = require('./singleItem')

Router
  .use('/getPost', getPost)
  .use('/updateDel', updateDel)

module.exports = Router
