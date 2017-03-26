// Custom service for changing HTML5 date formats ($inject to controller)
(function () {
  angular
    .module('myApp')
    .factory('DateChanger', DateChanger)

  function DateChanger () {
    let allFormats = { toDayTime, add48Hrs, stateCheck }

    function toDayTime () {
      var greet = ''
      var hour = new Date(Date.now()).getHours()
      if (hour < 12) greet = 'Morning'
      else if (hour >= 12 && hour < 17) greet = 'Afternoon'
      else if (hour >= 17 && hour < 21) greet = 'Evening'
      else greet = 'Night'
      return greet
    }

    function add48Hrs () {
      var today = new Date()
      return today.setHours(today.getHours() + 48)
    }

    function stateCheck (foodObj) {
      if (!foodObj.state) foodObj.state = ''
      foodObj.dateBought = new Date(foodObj.dateBought)
      foodObj.dateExpiring = new Date(foodObj.dateExpiring)
      if (foodObj.dateExpiring < new Date()) foodObj.state = 'Expired 😭'
      else if ((foodObj.dateExpiring > new Date()) && (foodObj.dateExpiring < add48Hrs())) foodObj.state = 'Expiring 😓'
      else if ((foodObj.dateExpiring > foodObj.dateBought) && (foodObj.dateExpiring > new Date())) foodObj.state = 'Fresh 😍'
      else foodObj.state = 'Fresh 😍'
    }
    return allFormats  // returning factory object
  }
})()
