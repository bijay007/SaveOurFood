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

  console.log('main' + $scope)
  // const { foodName, quantity, dateBought, dateExpiring } = $scope

  $log.log(`scope of main is ${$scope} & foodName is ${$scope.foodName}`)

    // opening modal window to trigger model instance controller to act
  $scope.show = (index, name) => {
    $log.log(`${index} button with name ${name} was clicked`)
    var configModal = {
      animation: true,
      templateUrl: 'myModal.html',
      controller: 'FoodModalController',
      size: 'sm'
      // $scope.$on('dataSend', () => {
      //   resolve: { foodName, quantity, dateBought, dateExpiring }
      // }
      // resolve: { foodName, quantity, dateBought, dateExpiring }
    }
    $uibModal.open(configModal)
  }
}
