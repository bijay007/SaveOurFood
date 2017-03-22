(function () {
  angular
    .module('myApp')
    .controller('FoodStatusController', FoodStatusController)

  function FoodStatusController ($state, $scope) {
    let state = this

    state.current = 'condition depending on parent controller'
  }
})()
