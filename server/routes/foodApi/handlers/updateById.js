const FoodModel = require(__base + 'models/ItemModel')

module.exports = (req, res) => {
  const { id } = req.params
  console.log(`request body is ${req.body} & item id received is ${id}`)
  let { foodName, quantity, dateBought, dateExpiring, status } = req.body
  let newUpdatedItem = {}
  dateExpiring >= dateBought ? status = 'Fresh' : status = 'Expired'

  if ((foodName) && (quantity) && (dateBought) && (dateExpiring)) {
    Object.assign(newUpdatedItem, {foodName, quantity, dateBought, dateExpiring, status})
    console.log(`newitem's name changed into ${newUpdatedItem.foodName}`)
  }

  FoodModel.findByIdAndUpdate(id, newUpdatedItem)
    .then(updatedItem => {
      console.log('item has been updated succesfully')
      res.status(200).json(newUpdatedItem)
    })
    .catch(err => res.status(500).json(err))
}
