(function () {
  angular
    .module('myApp')
    .factory('SaveFoodFactory', SaveFoodFactory)

  function SaveFoodFactory ($http, $q, $rootScope) {
    let APIEndPoints = { getAllItems, addItem, removeItem, editItem }

    function broadcastChanges () {
      $rootScope.$broadcast('foodChanged')
    }

    function getAllItems () {
      const url = '/allitems'
      return $http.get(url)
        .then(response => response.data)
    }

    function addItem ({ foodName, dateBought, dateExpiring, quantity }) {
      const url = '/allitems'
      console.log(`foodName send to server : ${foodName}`)
      return $http.post(url, { foodName, quantity, dateBought, dateExpiring })
      .then(broadcastChanges())
    }

    function removeItem (id) {
      const url = '/singleitem'
      return $http.delete(url + `/${id}`)
      .then(broadcastChanges())
    }

    function editItem ({foodName, dateBought, dateExpiring, quantity, id}) {
      const url = '/singleitem'
      return $http.put(url + `/${id}`, { foodName, dateBought, dateExpiring, quantity })
      .then(broadcastChanges())
    }
    return APIEndPoints
  }
})()
