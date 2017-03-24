const mongoose = require('mongoose')
const collection = 'user'
const passportLocalMongoose = require('passport-local-mongoose')

const UserSchema = new mongoose.Schema({
  firstName: {type: String},
  email: {type: String}
  // items: {type: mongoose.Schema.Types.ObjectId, ref: 'Item'}
}, {collection})
const options = {}
// this plugin encrypts password with hash & salt (you can use bcrypto and others)
UserSchema.plugin(passportLocalMongoose, options)

module.exports = mongoose.model('User', UserSchema)

