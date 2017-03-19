const mongoose = require('mongoose')
const collection = 'user'
const passportLocalMongoose = require('passport-local-mongoose')

const UserSchema = new mongoose.Schema({
  firstName: {type: String},
  email: {type: String},
  vegetarian: {type: Boolean}

}, {collection})
const options = {}

UserSchema.plugin(passportLocalMongoose, options) // this plugin encrypts password with hash & salt

module.exports = mongoose.model('User', UserSchema)

