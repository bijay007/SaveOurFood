const FoodModel = require(__base + 'models/ItemModel')

module.exports = (req, res) => {
  const IdUser = req.user._id
  var { foodName, quantity, dateBought, dateExpiring, state } = req.body
  // if (!foodName) res.status(400).json({'Error': 'Invalid data!! Need food name.'})
  if (state === undefined) state = ''
  const newItem = new FoodModel({ foodName, dateBought, dateExpiring, quantity, state, IdUser })

  newItem.save()
    .then(item => res.status(200).json(item))
    .catch(err => res.status(500).send(err))
}
