(function () {
  angular
    .module('myApp')
    .controller('FoodListController', FoodListController)


    function FoodListController(SaveFoodFactory, $route, $routeParams) {
    // foodList.emitChange = function () {
    //   SaveFoodFactory.getAllItems()
    //     .then(items => { foodList.updatedFoodList = items })
    // }
    // foodList.$on('foodChanged', foodList.emitChange)

    let foodList = this

    SaveFoodFactory.getAllItems()
      .then((allItems) => {
        vm.allFoodItems = allItems
      })

    foodList.removeFood = function (e, elemId) {
      e.preventDefault()
      console.log(`element id captured is ${elemId}`)
      SaveFoodFactory.removeItem(elemId)
        .then($route.reload())
    }

    foodList.editFood = function (e, foodName, quantity, dateBought, dateExpiring, elemId) {
      e.preventDefault()
      SaveFoodFactory.editItem(elemId, foodName, quantity, dateBought, dateExpiring)
    }
}
