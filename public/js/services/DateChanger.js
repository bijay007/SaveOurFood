// Custom service for changing HTML5 date formats ($inject to controller)
(function () {
  angular
    .module('myApp')
    .factory('DateChanger', DateChanger)

  function DateChanger () {
    let allFormats = { toDayTime, add24Hrs, stateCheck }

    function toDayTime () {
      var greet = ''
      var hour = new Date(Date.now()).getHours()
      if (hour < 12) greet = 'Morning'
      else if (hour >= 12 && hour < 17) greet = 'Afternoon'
      else if (hour >= 17 && hour < 21) greet = 'Evening'
      else greet = 'Night'
      return greet
    }

    function add24Hrs () {
      var today = new Date()
      today.setHours(today.getHours() + 24)
      return new Date(today)
    }

    function stateCheck (date) {
      var state = ''
      var jsDate = new Date(Date.parse(date))
      if (new Date(Date.now()) > jsDate) state = 'Expired'
      else if ((jsDate > new Date(Date.now()) && (jsDate < add24Hrs()))) state = 'Expiring'
      else state = 'Fresh'
      return state
    }
    return allFormats  // returning factory object
  }
})()
