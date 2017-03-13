const ItemsDB = require('../../../models/itemModel')

module.exports = (req, res) => {
  const { foodName, dateBought, dateExpiring, quantity } = req.body
  const newItem = new ItemsDB({ foodName, dateBought, dateExpiring, quantity })

  newItem.save()
    .then(item => res.status(200).redirect('/', { newItem }))
    .catch(err => res.status(500).json(err))
}
