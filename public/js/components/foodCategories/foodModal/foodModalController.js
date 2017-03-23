angular
    .module('myApp')
    .controller('FoodModalController', FoodModalController)

function FoodModalController ($scope, $uibModalInstance, $log, ifNoName) {
  $scope.ok = function () {
  	console.log($scope)
    // $scope.$emit('dataSend', () => {foodName, quantity, dateBought, dateExpiring})
    $log.log(`Modal data redirected back to parent scope with ${$scope.foodName}`)
    $uibModalInstance.close($scope)
  }
  $scope.cancel = () => { $uibModalInstance.dismiss('cancel') }
}

