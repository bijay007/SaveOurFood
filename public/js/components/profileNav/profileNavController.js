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
      const dateList = items.map(({ dateExpiring }) => dateExpiring)
      const stateList = dateList.map(date => DateChanger.stateCheck(date))
      stateList.forEach(state => {
        if (state === 'Expired') vm.counterExpired += 1
        else if (state === 'Expiring') vm.counterExpiring += 1
        else vm.counterFresh += 1
        Object.assign($stateParams, vm) // so I can listen to changes here in foodStatusController
        // $rootScope.$broadcast('stuffsChanged', $stateParams)
      })
    })

    $scope.$on('foodRemoved', (e, { dateExpiring }) => {
      const stateFoodRemoved = DateChanger.stateCheck(dateExpiring)
      if (stateFoodRemoved === 'Expired') vm.counterExpired -= 1
      else if (stateFoodRemoved === 'Expiring') vm.counterExpiring -= 1
      else vm.counterFresh -= 1
      Object.assign($stateParams, vm)
      // $rootScope.$broadcast('stuffsChanged', $stateParams)
    })

    $scope.$on('foodAdded', (e, { dateExpiring }) => {
      const stateFoodAdded = DateChanger.stateCheck(dateExpiring)
      if (stateFoodAdded === 'Expired') vm.counterExpired += 1
      else if (stateFoodAdded === 'Expiring') vm.counterExpiring += 1
      else vm.counterFresh += 1
      Object.assign($stateParams, vm)
      // $rootScope.$broadcast('stuffsChanged', $stateParams)
    })

    vm.logout = function () {
      AuthFactory.logout()
      $state.go('login')
    }
  }
})()
