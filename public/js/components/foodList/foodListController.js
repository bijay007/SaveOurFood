(function () {
  angular
    .module('myApp')
    .controller('FoodListController', FoodListController)

  function FoodListController (SaveFoodFactory, $state, $scope, $rootScope, AuthFactory, DateChanger) {
    let vm = this

    // $scope.$on('foodChanged', ($event) => SaveFoodFactory.getAllItems())

    const id = $scope.loggedUser.id

    SaveFoodFactory.getAllItems(id)
    .then((data) => {
      vm.allFoodItems = data
      return vm.allFoodItems
    })

    vm.removeFood = function (e, elemId) {
      e.preventDefault()
      console.log(`element with ${elemId} was deleted`)
      SaveFoodFactory.removeItem(elemId)
    }

    vm.editFood = function (e, id, foodName, quantity, dateBought, dateExpiring) {
      e.preventDefault()
      if (!dateBought) dateBought = new Date()
      if (!dateExpiring) dateExpiring = DateChanger.add24Hrs()
      SaveFoodFactory.editItem({foodName, dateBought, dateExpiring, quantity, id})
    }

    vm.logout = function () {
      AuthFactory.logout()
      $state.go('login')
    }
  }
})()
