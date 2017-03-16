(function () {
  angular
    .module('myApp')
    .controller('FoodStatusController', FoodStatusController)

    function FoodStatusController(){

    // listens to changes on parent controller (foodlist) and changes its scope values likewise

    let state = this

    state.current = 'condition depending on parent controller'
    
}