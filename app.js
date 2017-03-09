const express = require('express')
const path = require('path')
const app = express()
const PORT = process.env.PORT || 3000
const publicFolder = path.join(__dirname, 'public')

app
  .use('/', express.static(publicFolder))
  .listen(PORT, () => console.log(`Listening on port ${PORT}...`))
