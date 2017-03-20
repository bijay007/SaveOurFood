angular
    .module('myApp')
    .controller('FoodModalController', FoodModalController)

function FoodModalController ($scope, $uibModalInstance, SaveFoodFactory, $log) {
  console.log('modal' + $scope)

  var { foodName, quantity, dateBought, dateExpiring } = $scope
  dateExpiring = Date.parse('dateExpiring') || Date.parse(new Date()) + 8640000 // html5 date to timestamp
  dateBought = Date.parse('dateBought') || Date.now()

  $log.log(`scope of modal is ${$scope} & foodName is ${$scope.foodName}`)

  $scope.ok = function () {
    SaveFoodFactory.addItem({ foodName, quantity, dateBought, dateExpiring })
    // $scope.$emit('dataSend', () => {foodName, quantity, dateBought, dateExpiring})
    $log.log(`foodName passed to db is ${foodName}`)
    $uibModalInstance.close(this)
  }

  $scope.cancel = () => { $uibModalInstance.dismiss('cancel') }
}
