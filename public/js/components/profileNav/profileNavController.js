(function () {
  angular
    .module('myApp')
    .controller('ProfileNavController', ProfileNavController)

    function ProfileNavController() {

    	let user = this

    	user.userName = 'get name of user logged in'
    	user.foodExpiring = 'sums food in list with status of expiring'
    	user.foodExpired = 'sums food in list with status of expired'

    }
