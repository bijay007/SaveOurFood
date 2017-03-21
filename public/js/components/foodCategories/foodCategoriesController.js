angular
    .module('myApp')
    .controller('FoodCategoriesController', FoodCategoriesController)

function FoodCategoriesController ($scope, $stateParams, $log, $uibModal, SaveFoodFactory) {
  $scope.imgNmodals = {
    'Fruits N Vegs': 'fruitsmodal',
    'Milk N Eggs': 'milkmodal',
    'Fish N Meat': 'fishmodal',
    'Frozen N Canned': 'frozenmodal',
    'Drinks N Liquids': 'liquidmodal',
    'Other Unspecified': 'othersmodal'
  }

  var afterDataCapture = ({ foodName, quantity, dateBought, dateExpiring }) => {
    $log.log('below is whats added')
    dateExpiring = Date.parse('dateExpiring') || Date.parse(new Date()) + 8640000 // html5 date to timestamp
    dateBought = Date.parse('dateBought') || Date.now()
    quantity = quantity || 0
    console.log(`Captured from modal ${foodName}, ${quantity}, ${dateBought}, ${dateExpiring}`)
    SaveFoodFactory.addItem({ foodName, quantity, dateBought, dateExpiring })
  }

    // opening modal window to trigger model instance controller to act
  $scope.show = (index, name) => {
    $log.log(`Button with index ${index} and name ${name} was clicked !!`)
    var configModal = {
      animation: true,
      templateUrl: 'myModal.html',
      controller: 'FoodModalController',
      size: 'sm'
      // $scope.$on('dataSend', () => {
      //   resolve: { foodName, quantity, dateBought, dateExpiring }
      // }
    }
    var modalInstance = $uibModal.open(configModal)
    modalInstance.result.then(afterDataCapture, console.log)
  }
}
