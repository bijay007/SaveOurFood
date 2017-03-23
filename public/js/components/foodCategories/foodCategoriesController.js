angular
    .module('myApp')
    .controller('FoodCategoriesController', FoodCategoriesController)

function FoodCategoriesController ($scope, $stateParams, $log, $uibModal, SaveFoodFactory, DateChanger) {
  $scope.imgNmodals = {
    'Fruits N Vegs': 'Fruits',
    'Milk N Eggs': 'Milk',
    'Fish N Meat': 'Meat',
    'Frozen N Canned': 'Frozen',
    'Drinks N Liquids': 'Drinks',
    'Other Unspecified': 'Others'
  }

  var afterDataCapture = ({ foodName, quantity, dateBought, dateExpiring }) => {
    dateExpiring ? dateExpiring = new Date(dateExpiring) : dateExpiring = DateChanger.add24Hrs()
    dateBought ? dateBought = new Date(dateBought) : dateBought = new Date()
    if (!foodName) foodName = $scope.ifNoName
    SaveFoodFactory.addItem({ foodName, quantity, dateBought, dateExpiring })
  }

  // opening modal window to trigger model instance controller to act
  $scope.show = (index, name) => {
    $log.log(`Button with index ${index} and name ${name} was clicked !!`)
    var configModal = {
      animation: true,
      templateUrl: 'myModal.html',
      controller: 'FoodModalController',
      size: 'sm',
      resolve: {
        ifNoName: () => name
      }
    }
    var modalInstance = $uibModal.open(configModal)
    modalInstance.result.then(afterDataCapture, console.log)
  }
}
