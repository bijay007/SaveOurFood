(function () {
  angular
    .module('myApp')
    .controller('ProfileNavController', ProfileNavController)

  function ProfileNavController ($stateParams) {
    let user = this

    user.userName = 'get name of user logged in'

    user.counterExpiring = 0
    user.counterExpired = 0

    const checkExpired = function (allItems) {
      for (var elem in allItems) {
        if (Date.parse(elem.dateExpiring) < Date.now()) {
          user.counterExpired += 1
        } else if (Date.parse(elem.dateExpiring) > Date.now() && Date.parse(elem.dateExpiring) < Date.now() + 8640000) {
          user.counterExpiring += 1
        }
      }
    }
  }
})()
