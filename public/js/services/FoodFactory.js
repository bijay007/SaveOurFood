(function () {
  angular
    .module('myApp')
    .factory('SaveFoodFactory', SaveFoodFactory)

  function SaveFoodFactory ($http, $rootScope, DateChanger, $state) {
    let APIEndPoints = { getAllItems, addItem, removeItem, editItem }

    function getAllItems (idUser) {
      const url = `/foodApi/${idUser}`
      return $http.get(url)
        .then(response => response.data)
        .then(data => {
          $rootScope.$broadcast('dataReady', data)
          return data
        })
    }

    function addItem ({ foodName, dateBought, dateExpiring, quantity }) {
      const url = '/foodApi/'
      return $http.post(url, { foodName, dateBought, dateExpiring, quantity })
        .then(item => $rootScope.$broadcast('foodAdded', item.data))
    }

    function removeItem (id) {
      console.log(`item with id ${id} was deleted`)
      const url = `/foodApi/${id}`
      return $http.delete(url)
        .then(item => $rootScope.$broadcast('foodRemoved', item.data))
    }

    function editItem ({foodName, dateBought, dateExpiring, quantity, id}) {
      const url = `/foodApi/${id}`
      return $http.put(url, { foodName, dateBought, dateExpiring, quantity, id })
        // .then($state.go($state.$current, null, { reload: true }))
        .then(item => $rootScope.$broadcast('foodUpdated', item.data))
    }

    return APIEndPoints
  }
})()
