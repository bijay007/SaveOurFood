(function () {
  angular
    .module('myApp')
    .controller('ProfileController', ProfileController)

  function ProfileController ($routeParams, SaveFoodFactory, $route, $scope) {
    let vm = this

    $scope.$on('foodChanged', function () {
      SaveFoodFactory.getAllItems()
        .then((allItems) => {
          vm.allFoodItems = allItems
        })
    })

    SaveFoodFactory.getAllItems()
    .then((allItems) => {
      var formattedItems = allItems.map(function (elem) {
        let dateExpiring = (typeof (elem.dateExpiring) === Date) ? elem.dateExpiring.split('').splice(0, 10).join(' ') : new Date()
        let dateBought = elem.dateBought.split('').splice(0, 10).join(' ')
        let foodName = elem.foodName
        let quantity = elem.quantity
        return { foodName, quantity, dateBought, dateExpiring }
      })
      vm.allFoodItems = formattedItems
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
        .then(vm.emitChange())
    }

    // vm.newField = {}

    // vm.saveData = function (data) {
    //   console.log(data)
    //   SaveFoodFactory.editItem({data.foodName, data.dateBought, data.dateExpiring, data.quantity, data._id})
    // }
  }
})()
