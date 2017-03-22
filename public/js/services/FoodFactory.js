(function () {
  angular
    .module('myApp')
    .factory('SaveFoodFactory', SaveFoodFactory)

  function SaveFoodFactory ($http, $rootScope, DateChanger, $state) {
    let APIEndPoints = { getAllItems, addItem, removeItem, editItem }

    // broadcast changes from rootScope to all controllers when api methods are called
    // var broadcastChanges = () => { $rootScope.$broadcast('foodChanged', '') }

    function getAllItems (id) {
      const url = `/foodApi/${id}`
      return $http.get(url)
        .then(response => response.data)
    }

    function addItem ({ foodName, dateBought, dateExpiring, quantity }) {
      const url = '/foodApi/'
      console.log(`${foodName} send to server to add`)
      return $http.post(url, { foodName, dateBought, dateExpiring, quantity })
      .then($state.go($state.$current, null, { reload: true }))
      // .then(broadcastChanges)
    }

    function removeItem (id) {
      console.log(`item with id ${id} was deleted`)
      const url = `/foodApi/${id}`
      return $http.delete(url)
      .then($state.go($state.$current, null, { reload: true }))
    }

    function editItem ({foodName, dateBought, dateExpiring, quantity, id}) {
      const url = `/foodApi/${id}`
      console.log(`id of item edited is ${id}`)
      // if (!dateBought) dateBought = new Date()
      // if (!dateExpiring) dateExpiring = DateChanger.add24Hrs()
      return $http.put(url, { foodName, dateBought, dateExpiring, quantity, id })
      .then($state.go($state.$current, null, { reload: true }))
    }

    return APIEndPoints
  }
})()
