(function () {
  angular
    .module('myApp')
    .controller('ProfileNavCtrl', ProfileNavCtrl)

  function ProfileNavCtrl ($state, $scope, UserFactory, SaveFoodFactory, DateChanger) {
    let vm = this

    var userId = $scope.loggedUser.id
    UserFactory.getUser(userId).then(res => vm.userName = res.username)

    vm.counterExpired = 0
    vm.counterExpiring = 0
    vm.counterFresh = 0

    SaveFoodFactory.getAllItems(userId)
    // saving all expiry dates in an array
    .then(items => {
      var dateList = []
      items.forEach(elem => dateList.push(elem.dateExpiring))
      return dateList
    })
    .then(dateArr => {
    // saving all state(condition) of expiry date in array
      var stateList = []
      dateArr.forEach(date => stateList.push(DateChanger.stateCheck(date)))
      return stateList
    })
    .then(stateArr => {
      stateArr.forEach(elem => {
        if (elem === 'Expired') {
          vm.counterExpired += 1
        } else if (elem === 'Expiring') {
          vm.counterExpiring += 1
        } else {
          vm.counterExpired += 1
        }
      })
    })

    vm.day = new Date()
    vm.greetings = DateChanger.toDayTime()
  }
})()
