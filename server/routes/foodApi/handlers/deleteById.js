const FoodModel = require(__base + 'models/ItemModel')

module.exports = (req, res) => {
  const { id } = req.params
  console.log(req.body)

  FoodModel.findByIdAndRemove(id)
  .then(item => res.status(200).json(item))
  .catch(err => res.status(500).json(err))
}
