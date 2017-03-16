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
      })
    }
  }
})()
