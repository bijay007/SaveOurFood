const fs = require('fs')
const thereIsDotEnv = fs.existsSync('.env')
if (thereIsDotEnv) require('dotenv').config()

global.__base = __dirname + '/server/'

const app = require('./server/app')
const db = require('./server/config/db')  // has all config and error handling for mongoose db

const DB_URI = process.env.DB_URI || 'mongodb://localhost:27017/foodlistdb'
const PORT = process.env.PORT

console.log(`connecting to database ${DB_URI}...`)

db.open(DB_URI)
app.listen(PORT, () => console.log(`Listening on port ${PORT}...`))
