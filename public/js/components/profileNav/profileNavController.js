(function () {
  angular
    .module('myApp')
    .controller('ProfileNavCtrl', ProfileNavCtrl)

  function ProfileNavCtrl ($state, $scope, UserFactory, SaveFoodFactory, AuthFactory, DateChanger, $stateParams, $rootScope) {
    let vm = this
    const userId = $scope.loggedUser.id

    // greeting to user section
    UserFactory.getUser(userId)
      .then(res => { vm.userName = res.username })
    vm.day = new Date()
    vm.greetings = DateChanger.toDayTime()
    vm.counterExpired = vm.counterExpiring = vm.counterFresh = 0 // setting initial value

    // list of all broadcast message listeners (for every http requests)
    $scope.$on('dataReady', (e, items) => {
      items.forEach(item => {
        DateChanger.stateCheck(item)
        if (item.state === 'Expired 😭') vm.counterExpired += 1
        else if (item.state === 'Expiring 😓') vm.counterExpiring += 1
        else vm.counterFresh += 1
      })
    })
    $scope.$on('foodRemoved', (e, item) => {
      DateChanger.stateCheck(item)
      if (item.state === 'Expired 😭') vm.counterExpired -= 1
      else if (item.state === 'Expiring 😓') vm.counterExpiring -= 1
      else vm.counterFresh -= 1
    })

    $scope.$on('foodAdded', (e, item) => {
      DateChanger.stateCheck(item)
      if (item.state === 'Expired 😭') vm.counterExpired += 1
      else if (item.state === 'Expiring 😓') vm.counterExpiring += 1
      else vm.counterFresh += 1
    })

    vm.logout = function () {
      AuthFactory.logout()
      $state.go('login')
    }
  }
})()
