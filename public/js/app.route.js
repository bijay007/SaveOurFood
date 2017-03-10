angular.module('myApp')
  .config($routeProvider => {
    $routeProvider

      .when('/', {
        templateUrl: '../templates/home.html'
      })
      .when('/login', {
        templateUrl: '../templates/login.html'
      })
      .when('/register', {
        templateUrl: '../templates/register.html'
      })
      .when('/profile', {
        templateUrl: '../templates/profile.html'
      })
      .otherwise('/')
  })
