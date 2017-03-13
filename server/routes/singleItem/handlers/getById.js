const FoodModel = require('../../../models/itemModel')

module.exports = (req, res) => {
  const { id } = req.params

  FoodModel.findById(id)
    .then(item => res.json(item))
    .catch(err => { throw err })
}
