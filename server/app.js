// Importing installed dependencies
const express = require('express')
const path = require('path')
const bodyParser = require('body-parser')

const routesAuth = require('./routes/auth')
const routesFood = require('./routes/foodApi')
const routesUser = require('./routes/userApi')

// Instantiating middlewares, api endpoints and private routes
const app = express()

app
  .use(express.static(path.join(__dirname, '../public'))) // folder for client-side routing + rendering
  .use(bodyParser.urlencoded({ extended: false }))
  .use(bodyParser.json())

  .use('/auth', routesAuth)
  .use('/foodApi', routesFood)
  .use('/userApi', routesUser)

module.exports = app
