const FoodModel = require('../../../models/itemModel')

module.exports = (req, res) => {
  const { id } = req.params
  console.log(`id to delete received as ${id}`)

  FoodModel.findByIdAndRemove(id)
  .then(item => res.status(200))
  .catch(err => res.status(500).json(err))
}
