(function () {
  angular.module('myApp')
    .factory('UserFactory', UserFactory)

  function UserFactory ($http, $rootScope) {
    let APIEndPoints = { getUser }

    function getUser (id) {
      const url = `/userApi/${id}`
      return $http.get(url)
        .then(response => response.data)
    }

    // function getFoodItems (id) {
    //   var url = `/userApi/${id}/foodApi/`
    //   return $http.get(url)
    //     .then(response => response.data)
    // }

    return APIEndPoints
  }
})()
