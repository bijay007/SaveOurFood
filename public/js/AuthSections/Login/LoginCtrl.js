angular.module('myApp')
  .controller('LoginCtrl', function ($scope, $location, AuthFactory) {
    $scope.login = function () {
    // reads user-entered credentials from html, posts them to /auth/login on server,
    // saves the token send by server in localStorage & redirects user to profile page
      const username = $scope.username
      const password = $scope.password
      AuthFactory.login({ username, password })
        .then(AuthFactory.setCredentials)
        .then(() => $location.path('/profile'))
    }
  })
