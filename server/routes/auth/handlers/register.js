const User = require(__base + 'models/UserModel')

function register (req, res) {
  const { username, password, email } = req.body
  console.log(`username : ${username} & password : ${password} & email: ${email} & req.body: ${req.body}`)

  const account = new User({username, email})
  console.log(`account created is ${account}`)

  User.register(account, password, err => {
    if (err) {
      console.log('error register nayy')
      return res.json({success: false, msg: 'Username already exists !!'})
    }
    res.json({success: true, msg: 'Successful created new user !!'})
    console.log('success mofo')
  })
}

module.exports = register
