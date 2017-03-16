(function () {
  angular
    .module('myApp')
    .controller('FoodModalController', FoodModalController)

  function FoodModalController ($scope, $uibModalInstance) {
        // controller: ($scope, $modalInstance, $log, foodName, quantity, dateExpiring, dateBought) => {
        //   const { foodName, quantity, dateBought, dateExpiring } = $scope
        //   $log.log(`foodname captured from form was ${foodName}`)
        //   $scope.addFood(e) = function {
        //     e.preventDefault()
        //     SaveFoodFactory.addItem({ foodName, quantity, dateBought, dateExpiring })
        //     $log.log(`foodName passed to db is ${foodName}`)
        //     $modalInstance.dismiss('cancel')
        //   }

      // modalInstance.result
      // .then(
      //   selectedItem => { $scope.selected = selectedItem },
      //   () => { $log.info('Modal closed at: ' + new Date()) }
      // )
    $scope.cancel = () => { $uibModalInstance.dismiss('cancel') }
  }
})()
