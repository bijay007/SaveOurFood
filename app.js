// Importing installed dependencies
const express = require('express')
const path = require('path')
const publicFolder = path.join(__dirname, 'public')
const bodyParser = require('body-parser')
const app = express()

const routerItem = require('./server/routes/singleItem')
const routerAllItems = require('./server/routes/allItems')

const PORT = process.env.PORT || 3000
const urlDB = process.env.DB_URI || 'mongodb://localhost:27017/foodlistdb'
const mongoose = require('mongoose')
mongoose.Promise = global.Promise
mongoose.connect(urlDB)

// Instantiating middlewares and route paths
app
  .use(bodyParser.urlencoded({ extended: false }))
  .use(bodyParser.json())
  .use('/', express.static(publicFolder))
  .use('/singleitem', routerItem)
  .use('/allitems', routerAllItems)
  .listen(PORT, () => console.log(`Listening on port ${PORT}...`))
