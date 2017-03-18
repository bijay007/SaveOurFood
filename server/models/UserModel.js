const mongoose = require('mongoose')
const collection = 'user'
const passportLocalMongoose = require('passport-local-mongoose')

const UserSchema = new mongoose.Schema({
  firstName: {type: String},
  email: {type: String},
  vegetarian: {type: Boolean}

}, {collection})

UserSchema.plugin(passportLocalMongoose) // plugin for encrypting password with hash & salt

module.exports = mongoose.model('User', UserSchema)

