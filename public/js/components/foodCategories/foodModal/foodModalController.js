angular
    .module('myApp')
    .controller('FoodModalController', FoodModalController)

function FoodModalController ($scope, $uibModalInstance, $log, ifNoName) {
  $scope.ok = function () {
  // when ok, sends data back to controller that triggered the modal instance to open
    $log.log(`Modal data redirected back to parent scope with ${$scope.foodName}`)
    if (!$scope.foodName) $scope.foodName = ifNoName
    $uibModalInstance.close($scope)
  }
  $scope.cancel = () => { $uibModalInstance.dismiss('cancel') }
}

