angular.module('myApp')
  // first checks if the user is logged-in before managing states below
  .config($httpProvider => $httpProvider.interceptors.push('AuthInterceptor'))
  .config(['$stateProvider', '$urlRouterProvider', statesManager])

function statesManager ($stateProvider, $urlRouterProvider) {
  $urlRouterProvider.otherwise('/')

  $stateProvider
      .state('home', {url: '/', templateUrl: '/templates/home.html'})
      .state('login', {
        url: '/login',
        templateUrl: '/js/authSections/Login/login.html',
        controller: 'LoginCtrl'
      })
      .state('register', {
        url: '/register',
        templateUrl: '/js/authSections/Register/register.html',
        controller: 'RegisterCtrl'
      })
      .state('profile', {
        url: '/profile',
        secure: true,
        views: {
          '': { templateUrl: '/js/profileViews.html' },
          'profileNav@profile': {
            templateUrl: '/js/components/profileNav/profileNav.html',
            controller: 'ProfileNavCtrl',
            controllerAs: 'vm'
          },
          'foodStatus@profile': {
            templateUrl: '/js/components/foodStatus/foodStatus.html',
            controller: 'FoodStatusController',
            controllerAs: 'vm'
          },
          'foodList@profile': {
            templateUrl: '/js/components/foodList/foodList.html',
            controller: 'FoodListController',
            controllerAs: 'vm'
          },
          'foodCategories@profile': {
            templateUrl: '/js/components/foodCategories/foodCategories.html',
            controller: 'FoodCategoriesController',
            controllerAs: 'vm'
          }
        }
      })
}
