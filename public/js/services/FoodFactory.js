(function () {
  angular
    .module('myApp')
    .factory('SaveFoodFactory', SaveFoodFactory)

  function SaveFoodFactory ($http, $q, $rootScope) {
    let APIEndPoints = { getAllItems, addItem, removeItem, editItem }

    // user-defined method in rootScope object that executes...
    // when we do ajax requests that adds, removes or updates item on DOM
    // these can be listened by all controller via $on and do their own stuffs later
    var broadcastChanges = () => $rootScope.$broadcast('foodChanged')

    function getAllItems () {
      const url = '/foodApi/'
      return $http.get(url)
        .then(response => response.data)
    }

    function addItem ({ foodName, dateBought, dateExpiring, quantity }) {
      const url = '/foodApi/'
      console.log(`${foodName} send to server to add`)
      return $http.post(url, { foodName, quantity, dateBought, dateExpiring })
      .then(broadcastChanges)
    }

    function removeItem (id) {
      console.log(`item with id ${id} was deleted`)
      const url = `/foodApi/${id}`
      return $http.delete(url)
      .then(broadcastChanges)
    }

    function editItem ({foodName, dateBought, dateExpiring, quantity, id}) {
      const url = `/foodApi/${id}`
      console.log(`id of item edited is ${id}`)
      return $http.put(url, { foodName, dateBought, dateExpiring, quantity, id })
      .then(broadcastChanges)
    }
    return APIEndPoints
  }
})()
