const mongoose = require('mongoose')
const collection = 'foodlist'

const FoodSchema = new mongoose.Schema({
  foodName: {type: String},
  dateBought: {type: Number, default: Date.now()},
  dateExpiring: {type: Number},
  quantity: {type: Number},
  // weRecommend: {type: String},
  currentState: {type: String},
  IdUser: {type: mongoose.Schema.Types.ObjectId, ref: 'User'}
}, { collection })

module.exports = mongoose.model('FoodModel', FoodSchema)
