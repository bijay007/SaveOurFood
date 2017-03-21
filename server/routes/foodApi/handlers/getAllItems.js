const FoodModel = require(__base + 'models/ItemModel')

module.exports = (req, res) => {
  FoodModel.find({ 'IdUser': req.params.id })
  .then(allItems => {
    console.log(`first item is ${allItems[0].foodName}`)
    res.json(allItems)
  })
  .catch(err => { throw (err) })
}
