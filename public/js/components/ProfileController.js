(function () {
  angular
    .module('myApp')
    .controller('ProfileController', ProfileController)

  function ProfileController ($routeParams, SaveFoodFactory, $route, moment) {
    let vm = this

    // vm.emitChange = function () {
    //   SaveFoodFactory.getAllItems()
    //     .then(items => { vm.updatedFoodList = items })
    // }
    // vm.$on('foodChanged', vm.emitChange)

    SaveFoodFactory.getAllItems()
      .then((allItems) => {
        var formattedItems = allItems.map(function (elem) {
          let dateExpiring = elem.dateExpiring.split('').splice(0, 10).join(' ')
          let dateBought = elem.dateBought.split('').splice(0, 10).join(' ')
          let foodName = elem.foodName
          let quantity = elem.quantity
          return { foodName, quantity, dateBought, dateExpiring }
        })
        console.log(formattedItems)
        vm.allFoodItems = formattedItems
      })

    // vm.clickedCategory = (e, b) => {
    //   console.log(`${b} has been clicked`)
    // }

    vm.addFood = function (e) {
      e.preventDefault()
      const { foodName, quantity, dateBought, dateExpiring } = vm
      console.log(`vm foodname is ${vm.foodName}`)

      SaveFoodFactory.addItem({ foodName, quantity, dateBought, dateExpiring })
        .then($route.reload())
    }

    vm.removeFood = function (e, elemId) {
      e.preventDefault()
      console.log(`id captured from a element is ${elemId}`)
      SaveFoodFactory.removeItem(elemId)
        .then($route.reload())
    }

    vm.editFood = function (e, foodName, quantity, dateBought, dateExpiring, elemId) {
      e.preventDefault()
      SaveFoodFactory.editItem(elemId, foodName, quantity, dateBought, dateExpiring)
    }
  }
})()
