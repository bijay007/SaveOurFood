angular
    .module('myApp')
    .controller('FoodModalController', FoodModalController)

function FoodModalController ($scope, $uibModalInstance, SaveFoodFactory, $log) {
  const { foodName, quantity, dateBought, dateExpiring } = $scope
  $log.log(`scope of modal is ${$scope}`)
  $scope.ok = function () {
    SaveFoodFactory.addItem({ foodName, quantity, dateBought, dateExpiring })
    $log.log(`foodName passed to db is ${foodName}`)
    $uibModalInstance.close('cancel')
  }
  $scope.cancel = () => { $uibModalInstance.dismiss('cancel') }
}
