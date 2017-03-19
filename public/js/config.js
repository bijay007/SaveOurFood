angular.module('myApp')
  // first checks if the user is logged-in before managing the url routes below
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
      .when('/profile', {
        templateUrl: '/js/ProfileSection/profile.html',
        controller: 'ProfileCtrl',
        controllerAs: 'vm',
        secure: true
      })
      .otherwise('/')
  })
