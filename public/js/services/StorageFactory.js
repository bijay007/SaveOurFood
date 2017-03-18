angular.module('myApp')
  .factory('StorageFactory', function ($window) {
    const store = $window.localStorage
    const key = 'auth-token'
    return { readToken, saveToken, removeToken }

    // methods to read, store and remove tokens from localStorage - used by AuthFactory

    function readToken () {
      return store.getItem(key)
    }

    function saveToken (token) {
      return !!store.setItem(key, token)
    }

    function removeToken () {
      return store.removeItem(key)
    }
  })
