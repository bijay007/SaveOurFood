const FoodModel = require(__base + 'models/ItemModel')

module.exports = (req, res) => {
  FoodModel.find({ 'IdUser': req.params.id })
  .then(allItems => {
    res.json(allItems)
  })
  .catch(err => { throw (err) })
}
