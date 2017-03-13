const FoodModel = require('../../../models/itemModel')

module.exports = (req, res) => {
  FoodModel.find()
  .then(allTasks => res.json(allTasks))
  .catch(err => { throw (err) })
}
