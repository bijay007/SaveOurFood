const FoodModel = require('../../../models/itemModel')

module.exports = (req, res) => {
  const { id } = req.params

  let { foodName, quantity, dateBought, dateExpiring } = req.body
  let newUpdatedItem = {}

  if ((foodName) && (quantity) && (dateBought) && (dateExpiring)) {
    Object.assign(newUpdatedItem, {foodName, quantity, dateBought, dateExpiring})
  }

  FoodModel.findByIdAndUpdate(id, newUpdatedItem)
    .then(updatedItem => {
      console.log('item has been updated succesfully')
      res.status(200).json(newUpdatedItem)
    })
    .catch(err => res.status(500).json(err))
}
