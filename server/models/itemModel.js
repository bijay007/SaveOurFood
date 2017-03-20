const mongoose = require('mongoose')
const collection = 'foodlist'

const FoodSchema = new mongoose.Schema({
  foodName: { type: String, required: true },
  userId: String,
  dateBought: { type: Number, default: Date.now() },
  dateExpiring: Number,
  quantity: Number,
  weRecommend: String,
  currentState: String
}, { collection })

module.exports = mongoose.model('FoodModel', FoodSchema)
