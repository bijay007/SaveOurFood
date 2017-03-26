const mongoose = require('mongoose')
const collection = 'foodlist'

const FoodSchema = new mongoose.Schema({
  foodName: {type: String},
  dateBought: {type: Date, default: new Date()},
  dateExpiring: {type: Date},
  quantity: {type: Number, default: 0},
  state: {type: String},
  IdUser: {type: mongoose.Schema.Types.ObjectId, ref: 'User'}
}, { collection })

module.exports = mongoose.model('FoodModel', FoodSchema)
