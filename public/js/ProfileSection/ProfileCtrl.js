(function () {
  angular
    .module('myApp')
    .controller('ProfileCtrl', ProfileController)

  function ProfileController ($routeParams, $location, SaveFoodFactory, AuthFactory, $route, $scope, $rootScope) {
    $scope.$on('foodChanged', function () {
      SaveFoodFactory.getAllItems()
        .then((allItems) => {
          $scope.allFoodItems = allItems
          console.log(`value of allfood ${$scope.allFoodItems} ${allItems}`)
          checkExpired($scope.allFoodItems)
          SaveFoodFactory.getAllItems()
        })
    })

      // typeof (elem.dateExpiring) === Date) ? elem.dateExpiring.split('').splice(0, 10).join(' ') : new Date()
      // console.log(Date.parse(allFoodItems[0].dateExpiring))

    $scope.addFood = function (e) {
      e.preventDefault()
      var { foodName, quantity, dateBought, dateExpiring } = $scope
      dateExpiring = Date.parse('dateExpiring') || Date.parse(new Date()) + 8640000 // html5 date to timestamp
      dateBought = new Date('dateBought').getTime() || Date.now()
      console.log(`datexpiring is ${dateExpiring} & datebought is ${dateBought}`)
      SaveFoodFactory.addItem({ foodName, quantity, dateBought, dateExpiring })
    }

    $scope.removeFood = function (e, elemId) {
      e.preventDefault()
      console.log(`id captured from a element is ${elemId}`)
      SaveFoodFactory.removeItem(elemId)
    }

    $scope.editFood = function (data, id) {
      console.log(`${data} + ${id}`)
      // SaveFoodFactory.editItem({data.foodName, data.dateBought, data.dateExpiring, data.quantity, data.id})
    }

    $scope.counterExpiring = 0
    $scope.counterExpired = 0

    const checkExpired = function (allItems) {
      for (var elem in allItems) {
        if (Date.parse(elem.dateExpiring) < Date.now()) {
          $scope.counterExpired += 1
        } else if (Date.parse(elem.dateExpiring) > Date.now() && Date.parse(elem.dateExpiring) < Date.now() + 8640000) {
          $scope.counterExpiring += 1
        }
      }
    }

    $scope.logout = function () {
      AuthFactory.logout()
      $location.path('/login')
    }
  }
})()
