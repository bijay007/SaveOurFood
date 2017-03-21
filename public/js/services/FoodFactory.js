(function () {
  angular
    .module('myApp')
    .factory('SaveFoodFactory', SaveFoodFactory)

  function SaveFoodFactory ($http, $rootScope, DateChanger, $state) {
    let APIEndPoints = { getAllItems, addItem, removeItem, editItem }

    // broadcast changes from rootScope to all controllers when api methods are called
    // var broadcastChanges = () => {
    //   $rootScope.$broadcast('foodChanged', '')
    // }

    function getAllItems (id) {
      const url = `/foodApi/${id}`
      return $http.get(url)
        .then(response => response.data)
    }

    function addItem ({ foodName, dateBought, dateExpiring, quantity }) {
      const url = '/foodApi/'
      dateBought ? DateChanger.toTimeStamp(dateBought) : DateChanger.toToday()
      dateExpiring ? DateChanger.toTimeStamp(dateBought) : DateChanger.toToday() + 8640000
      return $http.post(url, { foodName, quantity, dateBought, dateExpiring })
      .then($state.go($state.$current, null, { reload: true }))
      // .then(broadcastChanges)
    }

    function removeItem (id) {
      const url = `/foodApi/${id}`
      return $http.delete(url)
      .then($state.go($state.$current, null, { reload: true }))
      // .then(broadcastChanges)
    }

    function editItem (foodName, dateBought, dateExpiring, quantity, id) {
      const url = `/foodApi/${id}`
      dateBought ? DateChanger.toTimeStamp(dateBought) : DateChanger.toToday()
      dateExpiring ? DateChanger.toTimeStamp(dateBought) : DateChanger.toToday() + 8640000
      return $http.put(url, { foodName, dateBought, dateExpiring, quantity, id })
      .then($state.go($state.$current, null, { reload: true }))
      // .then(broadcastChanges)
    }
    return APIEndPoints
  }
})()
