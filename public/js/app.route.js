angular.module('myApp')
  .config(['$stateProvider', '$urlRouterProvider', statesManager])

function statesManager ($stateProvider, $urlRouterProvider) {
  $urlRouterProvider.otherwise('/')

  $stateProvider
    .state('home', {url: '/', templateUrl: '/templates/home.html'})
    .state('login', {url: '/login', templateUrl: '/templates/login.html'})
    .state('register', {url: '/register', templateUrl: '/templates/register.html'})
    .state('profile', {
      url: '/profile',
      views: {
        '': {templateUrl: '/js/components/profile.html'},
        // 'profileNav@profile': {
        //   templateUrl: '/js/components/profileNav/profileNav.html',
        //   controller: 'ProfileNavController'
        // },
        // 'foodStatus@profile': {
        //   templateUrl: '/js/components/foodStatus/foodStatus.html',
        //   controller: 'FoodStatusController'
        // },
        // 'foodList@profile': {
        //   templateUrl: '/js/components/foodList/foodList.html',
        //   controller: 'FoodListController'
        // },
        'foodCategories@profile': {
          templateUrl: '/js/components/foodCategories/foodCategories.html',
          controller: 'FoodCategoriesController'
        },
        'foodModal@profile': {
          parent: 'foodCategories',
          templateUrl: '/js/components/foodCategories/foodModal/foodModal.html',
          controller: 'FoodModalController'
        }
      }
    })
}
