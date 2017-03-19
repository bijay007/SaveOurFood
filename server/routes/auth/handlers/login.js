var jwt = require('jsonwebtoken')

function login (req, res) {
  const SECRET = process.env.SECRET
  const { _id: id } = req.user
  console.log(`User _id is ${id} & username is ${req.user.username}`)

  const token = jwt.sign({ id }, SECRET)
  res.json({success: true, token: 'JWT ' + token})
}

module.exports = login
