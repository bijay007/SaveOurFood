const FoodModel = require(__base + 'models/ItemModel')

module.exports = (req, res) => {
  const IdUser = req.user._id
  const { foodName, quantity, dateBought, dateExpiring } = req.body
  // add the validation code below if you want the user to atleast enter food name
  // if (!foodName) res.status(400).json({'Error': 'Invalid data!! Need food name.'})

  console.log(`foodname received by server is ${foodName}`)
  const newItem = new FoodModel({ foodName, quantity, dateBought, dateExpiring, IdUser })

  newItem.save()
    .then(item => res.status(200))
    .catch(err => res.status(500).send(err))
}
