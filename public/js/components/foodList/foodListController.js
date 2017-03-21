(function () {
  angular
    .module('myApp')
    .controller('FoodListController', FoodListController)

  function FoodListController (SaveFoodFactory, $state, $scope, $rootScope, AuthFactory) {
    let vm = this
    const id = $scope.loggedUser.id

    // $scope.$on('foodChanged', ($event) => { SaveFoodFactory.getAllItems(id) })

    SaveFoodFactory.getAllItems(id)
    .then((data) => {
      vm.allFoodItems = data
      return vm.allFoodItems
    })

    vm.removeFood = function (e, elemId) {
      e.preventDefault()
      SaveFoodFactory.removeItem(elemId)
    }

    vm.editFood = function (e, id, name, quantity, dB, dE) {
      e.preventDefault()
      SaveFoodFactory.editItem(name, dB, dE, quantity, id)
    }

    vm.logout = function () {
      AuthFactory.logout()
      $state.go('login')
    }
  }
})()
