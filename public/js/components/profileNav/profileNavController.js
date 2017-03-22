(function () {
  angular
    .module('myApp')
    .controller('ProfileNavCtrl', ProfileNavCtrl)

  function ProfileNavCtrl ($state, $scope, UserFactory, SaveFoodFactory, AuthFactory, DateChanger) {
    let vm = this
    var userId = $scope.loggedUser.id

    UserFactory.getUser(userId)
      .then(res => { vm.userName = res.username })

    vm.counterExpired = vm.counterExpiring = vm.counterFresh = 0 // setting initial value

    $scope.$on('dataReady', (e, items) => {     // gets all items for notification tab
      const dateList = items.map(({ dateExpiring }) => dateExpiring)
      const stateList = dateList.map(date => DateChanger.stateCheck(date))

      stateList.forEach(state => {
        if (state === 'Expired') vm.counterExpired += 1
        else if (state === 'Expiring') vm.counterExpiring += 1
        else vm.counterFresh += 1
      })
    })

    $scope.$on('foodRemoved', (e, { dateExpiring }) => { // checks dateExpiring peoperty for comparision
      const stateFoodRemoved = DateChanger.stateCheck(dateExpiring)
      if (stateFoodRemoved === 'Expired') vm.counterExpired -= 1
      else if (stateFoodRemoved === 'Expiring') vm.counterExpiring -= 1
      else vm.counterFresh -= 1
    })

    $scope.$on('foodAdded', (e, { dateExpiring }) => {
      const stateFoodAdded = DateChanger.stateCheck(dateExpiring)
      if (stateFoodAdded === 'Expired') vm.counterExpired += 1
      else if (stateFoodAdded === 'Expiring') vm.counterExpiring += 1
      else vm.counterFresh += 1
    })
    $scope.$on('foodUpdated', (e, { dateExpiring }) => {
      const stateFoodUpdated = DateChanger.stateCheck(dateExpiring)
      if (stateFoodUpdated === 'Expired') vm.counterExpired += 1
      else if (stateFoodUpdated === 'Expiring') vm.counterExpiring += 1
      else vm.counterFresh += 1
    })

    vm.day = new Date()
    vm.greetings = DateChanger.toDayTime()
    vm.logout = function () {
      AuthFactory.logout()
      $state.go('login')
    }
  }
})()
