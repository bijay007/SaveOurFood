angular.module('myApp')

  .config(function ($httpProvider) {
    $httpProvider.interceptors.push('AuthInterceptor')
  })

  .config($routeProvider => {
    $routeProvider

      .when('/', {
        templateUrl: '/templates/home.html'
      })
      .when('/login', {
        templateUrl: '/js/AuthSections/Login/login.html',
        controller: 'LoginCtrl'
      })
      .when('/register', {
        templateUrl: '/js/AuthSections/Register/register.html',
        controller: 'RegisterCtrl'
      })
      .when('/foodApi', {
        templateUrl: '/js/ProfileSection/profile.html',
        controller: 'ProfileController',
        controllerAs: 'vm',
        secure: true
      })
      .otherwise('/')
  })
