(function () {
  angular
    .module('myApp')
    .controller('ProfileNavCtrl', ProfileNavCtrl)

  function ProfileNavCtrl ($state, $scope, UserFactory, SaveFoodFactory) {
    let vm = this

    var userId = $scope.loggedUser.id
    UserFactory.getUser(userId).then(res => vm.userName = res.username)
    vm.day = new Date()

    var date = new Date(Date.now()).getHours()
    var greetTime = (current) => {
      if (current < 12) {
        return 'Morning'
      } else if (current >= 12 && current < 17) {
        return 'Afternoon'
      } else if (current >= 17 && current < 21) {
        return 'Evening'
      } else { return 'Night' }
    }

    vm.greetings = greetTime(date)

    vm.counterExpiring = 3 // just for now default
    vm.counterExpired = 5
  }
})()
