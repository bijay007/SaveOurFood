angular.module('myApp')
  .controller('RegisterCtrl', function ($scope, AuthFactory) {
    $scope.register = () => {
    // sends user credentials to server via POST and redirects to login page
      const username = $scope.username
      const password = $scope.password
      const email = $scope.email || `anonymous${Math.Round(Math.random() * 1000)}@gmail.com`
      console.log(`Client data registered with : ${username} => ${email}`)
      AuthFactory.register({ username, password, email })
    }
  })
