const mongoose = require('mongoose')
const collection = 'foodlist'
const User = mongoose.model('User')

const FoodSchema = new mongoose.Schema({
  foodName: String,
  dateBought: { type: Number, default: Date.now() },
  dateExpiring: Number,
  quantity: Number,
  weRecommend: String,
  currentState: String,
  whichUser: {type: mongoose.Schema.ObjectId, ref: 'User'}
}, { collection })

module.exports = mongoose.model('FoodModel', FoodSchema)
