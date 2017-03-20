angular.module('myApp')
  .factory('AuthFactory', function ($http, $q, $rootScope, $state, StorageFactory, jwtHelper) {
  // AuthFactory returns an object with 5 methods
    return { login, register, logout, isLoggedIn, setCredentials }

  // passes user credentials to server endpoint '/login' & saves token in localStorage
    function login (credentials) {
      const url = '/auth/login'
      return $http.post(url, credentials)
        .then(response => response.data.token)
        .then(token => {
          StorageFactory.saveToken(token)
          return token
        })
    }
  // passes user credentials to endpoint '/register' and redirects to login page
    function register (credentials) {
      const url = '/auth/register'
      return $http.post(url, credentials)
        .then($state.go('login'))
    }
  // removes user token from localStorage & rootScope
    function logout () {
      delete $rootScope.loggedUser
      StorageFactory.removeToken()
    }
  // reads token from localStorage and checks expiry date of token
    function isLoggedIn () {
      const token = StorageFactory.readToken()
      if (!token) return false
      // const tokenPayload = jwtHelper.decodeToken(token)
      return !(jwtHelper.isTokenExpired(token))
    }
  // decodes the token and adds it to rootScope object
    function setCredentials (token) {
      var tokenPayload = jwtHelper.decodeToken(token)
      $rootScope.loggedUser = tokenPayload
    }
  })
