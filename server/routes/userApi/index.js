// Not too much endpoints to play with user. Making a /GET just in case I need later
const express = require('express')
const router = express.Router()
const UserModel = require(__base + 'models/UserModel')
const passport = require(__base + 'config/passport')

router.use(passport.authenticate('jwt', { session: false }))
// authorization step before access
router.get('/:id', (req, res) => {
  const { id } = req.params

  UserModel.findById(id)
    .then(user => res.json(user))
    .catch(err => { throw err })
})

// router.get('/:id/foodApi/', (req, res) => {
//   const { id } = req.params

//   FoodModel.find()
//   .then(allUserItems => res.json(allUserItems))
//   .catch(err => { throw (err) })
// })

module.exports = router
