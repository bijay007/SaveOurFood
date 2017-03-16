(function () {
  angular
    .module('myApp')
    .controller('FoodCategoriesController', FoodCategoriesController)

  function FoodCategoriesController ($scope, $stateParams, SaveFoodFactory, $log, $uibModal) {
    $scope.imgNmodals = {
      'Fruits N Vegs': 'fruitsmodal',
      'Milk N Eggs': 'milkmodal',
      'Fish N Meat': 'fishmodal',
      'Frozen N Canned': 'frozenmodal',
      'Drinks N Liquids': 'liquidmodal',
      'Other Unspecified': 'othersmodal'
    }

    // opening modal window to enter food data
    $scope.showModal = (clickedItem) => {
      $log.log(`${clickedItem} button was clicked`)
      $uibModal.open({
        templateUrl: '/js/components/foodCategories/foodModal/foodModal.html',
        size: 'sm'
        // controller: ($scope, $modalInstance, $log, foodName, quantity, dateExpiring, dateBought) => {
        //   const { foodName, quantity, dateBought, dateExpiring } = $scope
        //   $log.log(`foodname captured from form was ${foodName}`)
        //   $scope.addFood(e) = function {
        //     e.preventDefault()
        //     SaveFoodFactory.addItem({ foodName, quantity, dateBought, dateExpiring })
        //     $log.log(`foodName passed to db is ${foodName}`)
        //     $modalInstance.dismiss('cancel')
        //   }
        //   $scope.cancel = () => $modalInstance.dismiss('cancel')
      })
        // resolve: { foodItem: () => addedItem }
    }

      // modalInstance.result
      // .then(
      //   selectedItem => { $scope.selected = selectedItem },
      //   () => { $log.info('Modal closed at: ' + new Date()) }
      // )
  }

    // selector.addFood = function (e) {
    //   e.preventDefault()
    //   const { foodName, quantity, dateBought, dateExpiring } = selector
    //   console.log(`selector foodname is ${selector.foodName}`)

    //   SaveFoodFactory.addItem({ foodName, quantity, dateBought, dateExpiring })
    //     .then($state.reload())
    // }
})()
