const FoodModel = require(__base + 'models/ItemModel')

module.exports = (req, res) => {
  const { id } = req.params
  let { foodName, quantity, dateBought, dateExpiring, status } = req.body

  let newUpdatedItem = {}
  Object.assign(newUpdatedItem, {foodName, dateBought, dateExpiring, quantity, status})

  FoodModel.findByIdAndUpdate(id, newUpdatedItem)
    .then(updatedItem => {
      res.status(200).json(newUpdatedItem)
    })
    .catch(err => res.status(500).json(err))
}
