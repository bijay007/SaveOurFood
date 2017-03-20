angular
    .module('myApp')
    .controller('FoodCategoriesController', FoodCategoriesController)

function FoodCategoriesController ($scope, $stateParams, $log, $uibModal) {
  $scope.imgNmodals = {
    'Fruits N Vegs': 'fruitsmodal',
    'Milk N Eggs': 'milkmodal',
    'Fish N Meat': 'fishmodal',
    'Frozen N Canned': 'frozenmodal',
    'Drinks N Liquids': 'liquidmodal',
    'Other Unspecified': 'othersmodal'
  }
  $log.log(`scope of main is ${$scope}`)
    // opening modal window to trigger model instance controller to act
  $scope.show = clickedItem => {
    $log.log(`${clickedItem} button was clicked`)
    var configModal = {
      animation: true,
      templateUrl: 'myModal.html',
      controller: 'FoodModalController',
      size: 'sm'
    }
    $uibModal.open(configModal)
  }
}
