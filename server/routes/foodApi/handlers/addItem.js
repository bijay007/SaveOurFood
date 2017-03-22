const FoodModel = require(__base + 'models/ItemModel')

module.exports = (req, res) => {
  const IdUser = req.user._id
  const { foodName, quantity, dateBought, dateExpiring } = req.body
  // if (!foodName) res.status(400).json({'Error': 'Invalid data!! Need food name.'})
  const newItem = new FoodModel({ foodName, dateBought, dateExpiring, quantity, IdUser })

  newItem.save()
    .then(item => res.status(200).json(item))
    .catch(err => res.status(500).send(err))
}
