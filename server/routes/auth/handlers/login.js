var jwt = require('jsonwebtoken')

function login (req, res) {
  const SECRET = process.env.SECRET
  const { _id: id } = req.user
  console.log(`_id is ${_id} & id is ${id} & req.user is ${req.user}`)

  const token = jwt.sign({ id }, SECRET)
  res.json({success: true, token: 'JWT ' + token})
}

module.exports = login
