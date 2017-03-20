angular
    .module('myApp')
    .controller('FoodModalController', FoodModalController)

function FoodModalController ($scope, $uibModalInstance, $log) {
  $scope.ok = function () {
    // $scope.$emit('dataSend', () => {foodName, quantity, dateBought, dateExpiring})
    $log.log(`Modal data is redirected back to parent with scope ${$scope}`)
    $uibModalInstance.close($scope)
  }
  $scope.cancel = () => { $uibModalInstance.dismiss('cancel') }
}

