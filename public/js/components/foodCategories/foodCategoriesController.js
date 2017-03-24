angular
    .module('myApp')
    .controller('FoodCategoriesController', FoodCategoriesController)

function FoodCategoriesController ($scope, $stateParams, $log, $uibModal, SaveFoodFactory, DateChanger, $rootScope) {
  // to assign name and imgFileName to generate button and images in HTML
  $scope.imgNmodals = {
    'Fruits N Vegs': 'Fruits',
    'Milk N Eggs': 'Milk',
    'Fish N Meat': 'Meat',
    'Frozen N Canned': 'Frozen',
    'Drinks N Liquids': 'Drinks',
    'Unspecified': 'Others'
  }

  // stuffs that we do after getting data from model controller
  var afterDataCapture = ({ foodName, quantity, dateBought, dateExpiring }) => {
    dateExpiring ? dateExpiring = new Date(dateExpiring) : dateExpiring = DateChanger.add24Hrs()
    dateBought ? dateBought = new Date(dateBought) : dateBought = new Date()
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
      resolve: {  // we inject this stuff into the modal so modal can access button name
        ifNoName: () => name
      }
    }
    var modalInstance = $uibModal.open(configModal)
    modalInstance.result.then(afterDataCapture, console.log) // when data received, execute afterDataCapture function
  }
}
