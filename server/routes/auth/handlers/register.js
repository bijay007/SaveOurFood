const User = require(__base + 'models/UserModel')

function register (req, res) {
  const { username, password, email } = req.body
  const name = username
  const account = new User({name, username, email})

  User.register(account, password, err => {
    if (err) {
      return res.json({success: false, msg: 'Username already exists !!'})
    }
    res.json({success: true, msg: 'Successful created new user !!'})
  })
}

module.exports = register
