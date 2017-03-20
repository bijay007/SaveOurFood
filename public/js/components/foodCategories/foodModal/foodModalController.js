angular
    .module('myApp')
    .controller('FoodModalController', FoodModalController)

function FoodModalController ($scope, $uibModalInstance, $log) {
  console.log('modal' + $scope)

  $log.log(`scope of modal is ${$scope} & foodName is ${$scope.foodName}`)

  $scope.ok = function () {
    // $scope.$emit('dataSend', () => {foodName, quantity, dateBought, dateExpiring})
    $log.log(`modal data is send back to parent with scope ${$scope}`)
    $uibModalInstance.close($scope)
  }

  $scope.cancel = () => { $uibModalInstance.dismiss('cancel') }
}

