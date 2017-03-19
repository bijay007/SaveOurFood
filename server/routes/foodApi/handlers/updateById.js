const FoodModel = require(__base + 'models/ItemModel')

module.exports = (req, res) => {
  const { id } = req.params
  console.log(`id of item edited received by server is ${id}`)

  let { foodName, quantity, dateBought, dateExpiring } = req.body
  console.log(`req.body received as ${req.body} with foodname as ${foodName}`)
  let newUpdatedItem = {}

  if ((foodName) && (quantity) && (dateBought) && (dateExpiring)) {
    Object.assign(newUpdatedItem, {foodName, quantity, dateBought, dateExpiring})
    console.log(`newitem's name changed into ${newUpdatedItem.foodName}`)
  }

  FoodModel.findByIdAndUpdate(id, newUpdatedItem)
    .then(updatedItem => {
      console.log('item has been updated succesfully')
      res.status(200).json(newUpdatedItem)
    })
    .catch(err => res.status(500).json(err))
}
