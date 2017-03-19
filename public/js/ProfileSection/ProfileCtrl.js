(function () {
  angular
    .module('myApp')
    .controller('ProfileCtrl', ProfileController)

  function ProfileController ($routeParams, $location, SaveFoodFactory, AuthFactory, $route, $scope, $rootScope) {
    let vm = this

    $scope.$on('foodChanged', function () {
      SaveFoodFactory.getAllItems()
        .then((allItems) => {
          vm.allFoodItems = allItems
        })
      console.log(`vale of vm.allfood ${vm.allFoodItems}`)
        .then(checkExpired(vm.allFoodItems))
        .then(SaveFoodFactory.getAllItems())
    })

      // typeof (elem.dateExpiring) === Date) ? elem.dateExpiring.split('').splice(0, 10).join(' ') : new Date()
      // console.log(Date.parse(vm.allFoodItems[0].dateExpiring))

    vm.addFood = function (e) {
      e.preventDefault()
      var { foodName, quantity, dateBought, dateExpiring } = vm
      dateExpiring = Date.parse('dateExpiring') || Date.parse(new Date()) + 8640000 // html5 date to timestamp
      dateBought = new Date('dateBought').getTime() || Date.now()
      console.log(`datexpiring is ${dateExpiring} & datebought is ${dateBought} & ${dateExpiring - dateBought}`)
      SaveFoodFactory.addItem({ foodName, quantity, dateBought, dateExpiring })
    }

    vm.removeFood = function (e, elemId) {
      e.preventDefault()
      console.log(`id captured from a element is ${elemId}`)
      SaveFoodFactory.removeItem(elemId)
    }

    vm.editFood = function (data, id) {
      console.log(`${data} + ${id}`)
      // SaveFoodFactory.editItem({data.foodName, data.dateBought, data.dateExpiring, data.quantity, data.id})
    }

    const checkExpired = function (allItems) {
      vm.counterExpiring = 0
      vm.counterExpired = 0
      for (var elem in allItems) {
        if (Date.parse(elem.dateExpiring) < Date.now()) {
          vm.counterExpired += 1
        } else if (Date.parse(elem.dateExpiring) > Date.now() && Date.parse(elem.dateExpiring) < Date.now() + 8640000) {
          vm.counterExpiring += 1
        } else {
          console.log('fresh')
        }
        console.log(vm.counterExpired + ' - ' + vm.counterExpiring)
      }
    }

    vm.logout = function () {
      AuthFactory.logout()
      $location.path('/login')
    }
  }
})()
