(function () {
  angular
    .module('myApp')
    .controller('FoodListController', FoodListController)

  function FoodListController (SaveFoodFactory, $state, $scope, $rootScope, AuthFactory) {
    let vm = this

    $scope.$on('foodChanged', ($event) => SaveFoodFactory.getAllItems())

    const dateFormat = (timestamp) => {
      var date = new Date(timestamp)
      return [date.getDate(), date.getMonth() + 1, date.getFullYear()].join('/')
    }

    SaveFoodFactory.getAllItems()
    .then((data) => {
      data.forEach(elem => {
        elem.dateBought = dateFormat(elem.dateBought)
        elem.dateExpiring = dateFormat(elem.dateExpiring)
      })
      vm.allFoodItems = data
      console.log(`Get request returned ${vm.allFoodItems.length} items`)
      return vm.allFoodItems
    })

    vm.removeFood = function (e, elemId) {
      e.preventDefault()
      console.log(`element id captured is ${elemId}`)
      SaveFoodFactory.removeItem(elemId)
      $state.go($state.$current, null, { reload: true })
    }

    vm.editFood = function (e, id, name, quantity, dB, dE) {
      e.preventDefault()
      console.log(name, quantity, dB, dE, id + typeof (dE) + typeof (name))
      dE = Date.parse('dE').value || Date.now() + 8640000 // add 1 day
      dB = Date.parse('dB').value || Date.now()
      SaveFoodFactory.editItem({name, dB, dE, quantity, id})
    }

    vm.logout = function () {
      AuthFactory.logout()
      $state.go('login')
    }
  }
})()
