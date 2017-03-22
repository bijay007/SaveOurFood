(function () {
  angular
    .module('myApp')
    .controller('FoodListController', FoodListController)

  function FoodListController ($state, $scope, SaveFoodFactory, AuthFactory, DateChanger) {
    let vm = this
    const id = $scope.loggedUser.id

    $scope.$on('foodRemoved', (e, foodRemoved) => { vm.allFoodItems = vm.allFoodItems.filter(food => food._id !== foodRemoved._id) })
    $scope.$on('foodAdded', (e, foodAdded) => { vm.allFoodItems = vm.allFoodItems.concat(foodAdded) })
    // Object.defineProperty(foodAdded, 'dateBought', {value: new Date(dateBought)})

    $scope.$on('foodUpdated', (e, foodUpdated) => {
      vm.allFoodItems = vm.allFoodItems.filter(food => food._id !== foodUpdated._id)
      return vm.allFoodItems.concat(foodUpdated)
    })

    SaveFoodFactory.getAllItems(id)
      .then((data) => {
        data = data.map(food => {
          food.dateBought = new Date(food.dateBought) || new Date()
          food.dateExpiring = new Date(food.dateExpiring) || DateChanger.add24Hrs()
          return food
        })
        vm.allFoodItems = data
      })

    vm.removeFood = function (e, elemId) {
      e.preventDefault()
      SaveFoodFactory.removeItem(elemId)
    }

    vm.editFood = function (e, id, foodName, quantity, dateBought, dateExpiring) {
      e.preventDefault()
      SaveFoodFactory.editItem({foodName, dateBought, dateExpiring, quantity, id})
    }
  }
})()
