(function () {
  angular
    .module('myApp')
    .controller('ProfileNavCtrl', ProfileNavCtrl)

  function ProfileNavCtrl ($state, $scope, UserFactory, SaveFoodFactory, DateChanger) {
    let vm = this

    var userId = $scope.loggedUser.id
    UserFactory.getUser(userId).then(res => vm.userName = res.username)
    vm.day = new Date()

    vm.greetings = DateChanger.toDayTime()

    vm.counterExpiring = 0
    vm.counterExpired = 0
    vm.counterFresh = 0

    $scope.$on('foodChanged', SaveFoodFactory.getAllItems(userId))

    SaveFoodFactory.getAllItems(userId)
    .then(data => {
      var today = Date.now()
      var expiring = data.dateExpiring
      if (today > expiring) {
        vm.counterExpired += 1
      } else if ((today < expiring) && (today + 8640000 > expiring)) {
        vm.counterExpiring += 1
      } else { vm.fresh += 1 }
    })
  }
})()
