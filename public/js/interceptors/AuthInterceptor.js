// injects a Authorization token in the headers for every request (saved in localStorage)
// this helps to maintain loggedin status in server without a need for session

angular.module('myApp')

  .factory('AuthInterceptor', function (StorageFactory) {
    function request (config) {
      const token = StorageFactory.readToken()
      if (token) {
        config.headers = config.headers || {}
        config.headers.Authorization = token
      }

      return config
    }

    return { request }
  })
