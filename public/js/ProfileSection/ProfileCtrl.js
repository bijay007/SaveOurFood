(function () {
  angular
    .module('myApp')
    .controller('ProfileCtrl', ProfileController)

  function ProfileController ($routeParams, SaveFoodFactory, $route, $scope, $rootScope) {
    let vm = this
    console.log(vm)

    $scope.$on('foodChanged', function () {
      SaveFoodFactory.getAllItems()
        .then((allItems) => {
          vm.allFoodItems = allItems
        })
        .then(checkExpired(vm.allFoodItems))
        .then(SaveFoodFactory.getAllItems())
    })

    SaveFoodFactory.getAllItems()
    .then((allItems) => {
      // var formattedItems = allItems.map(function (elem) {
      //   let dateExpiring = (typeof (elem.dateExpiring) === Date) ? elem.dateExpiring.split('').splice(0, 10).join(' ') : new Date()
      //   let dateBought = elem.dateBought.split('').splice(0, 10).join(' ')
      //   let foodName = elem.foodName
      //   let quantity = elem.quantity
      //   return { foodName, quantity, dateBought, dateExpiring }
      // })
      vm.allFoodItems = allItems
      // console.log(Date.parse(vm.allFoodItems[0].dateExpiring))
    })

    vm.addFood = function (e) {
      e.preventDefault()
      const { foodName, quantity, dateBought, dateExpiring } = vm
      console.log(`vm foodname is ${vm.foodName}`)
      SaveFoodFactory.addItem({ foodName, quantity, dateBought, dateExpiring })
    }

    vm.removeFood = function (e, elemId) {
      e.preventDefault()
      console.log(`id captured from a element is ${elemId}`)
      SaveFoodFactory.removeItem(elemId)
    }

    vm.editFood = function (data) {
      console.log(data)
      // SaveFoodFactory.editItem({data.foodName, data.dateBought, data.dateExpiring, data.quantity, data._id})
    }

    const checkExpired = function (allItems) {
      console.dir(typeof (allItems) + allItems)
      var todayDate = Date.now()
      vm.counterExpiring = 0
      vm.counterExpired = 0
      for (var elem in allItems) {
        if (Date.parse(elem.dateExpiring) < todayDate) {
          vm.counterExpired += 1
        } else if (Date.parse(elem.dateExpiring) < (todayDate + 86400)) {
          vm.counterExpiring += 1
        } else {
          console.log('fresh')
        }
        console.log(vm.counterExpired + ' - ' + vm.counterExpiring)
      }
    }
  }
})()
