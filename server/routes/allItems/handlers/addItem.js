const FoodModel = require('../../../models/itemModel')

module.exports = (req, res) => {
  const { foodName, quantity, dateBought, dateExpiring } = req.body
  if (!foodName) res.status(400).json({'Error': 'Invalid data received!!'})

  console.log(`foodname received by server is ${foodName}`)
  const newItem = new FoodModel({ foodName, quantity, dateBought, dateExpiring })

  newItem.save()
    .then(item => res.status(200))
    .catch(err => res.status(500).send(err))
}
