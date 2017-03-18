angular.module('myApp')

// runs everytime any private section loads => .run(callback ($injectables))

  .run(function ($rootScope, $location, StorageFactory, AuthFactory) {
    if (AuthFactory.isLoggedIn()) {
      const token = StorageFactory.readToken()
      AuthFactory.setCredentials(token)
    }

    $rootScope.$on('$routeChangeStart', function (event, next, current) {
      if (next && next.secure) {
        if (!AuthFactory.isLoggedIn()) {
          $location.path('/login')
        }
      }
    })
  })
