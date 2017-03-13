const FoodModel = require('../../../models/itemModel')

module.exports = (req, res) => {
  const { id } = req.params

  FoodModel.findByIdAndRemove(id)
  .then(item => res.status(200).json(item))
  .catch(err => res.status(500).json(err))
}
