(function () {
  angular
    .module('myApp')
    .controller('FoodListController', FoodListController)

  function FoodListController ($state, $stateParams, $scope, SaveFoodFactory, AuthFactory, DateChanger, $rootScope) {
    let vm = this
    const id = $scope.loggedUser.id

    // get all items asynchronously that will get rendered on DOM
    SaveFoodFactory.getAllItems(id)
      .then((data) => {
        data = data.map(food => {
          food.dateBought = new Date(food.dateBought)
          food.dateExpiring = new Date(food.dateExpiring)
          if (food.dateExpiring < new Date()) {
            food.state = 'Expired 😭'
          } else if ((food.dateExpiring > new Date()) && (food.dateExpiring < DateChanger.add24Hrs())) {
            food.state = 'Expiring 😓'
          } else if ((food.dateExpiring > food.dateBought) && (food.dateExpiring > new Date())) {
            food.state = 'Fresh 😍'
          } else {
            food.state = 'Fresh 😍'
          }
          return food
        })
        vm.allFoodItems = data
      })

    // listen to messages broadcasted after doing http requests

    $scope.$on('foodRemoved', (e, foodRemoved) => { vm.allFoodItems = vm.allFoodItems.filter(food => food._id !== foodRemoved._id) })
    $scope.$on('foodAdded', (e, foodAdded) => {
      foodAdded.dateBought < foodAdded.dateExpiring ? foodAdded.state = 'Fresh ☺' : foodAdded.state = 'Expired ☹'
      return vm.allFoodItems = vm.allFoodItems.concat(foodAdded)
    })
    $scope.$on('foodUpdated', (e, foodUpdated) => {
      vm.allFoodItems = vm.allFoodItems.filter(food => food._id !== foodUpdated._id)
      return vm.allFoodItems.concat(foodUpdated)
    })

    // actions performed from DOM (ajax requests)
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
