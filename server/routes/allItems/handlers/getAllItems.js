const FoodModel = require('../../../models/itemModel')

module.exports = (req, res) => {
  FoodModel.find()
  .then(allItems => {
    console.log(`there are ${allItems.length} items in db`)
    res.json(allItems)
  })
  .catch(err => { throw (err) })
}
