// Custom service for changing HTML5 date to Timestamp & vice-versa.
// Just $inject this factory into the controller where you want to use this

(function () {
  angular
    .module('myApp')
    .factory('DateChanger', DateChanger)

  function DateChanger () {
    let allFormats = { toTimeStamp, toToday, toDateObj, toDayTime }

    function toTimeStamp (htmlDate) {     // converts html5 input date to timestamp
      return Date.parse('' + htmlDate)
    }

    function toToday () {  // saves current date to timestamp
      return Date.now()
    }

    function toDateObj (timestamp) {  // converts timestamp to date object
      return new Date(timestamp)
    }

    function toDayTime () {
      var greet = ''
      var hour = new Date(Date.now()).getHours()
      if (hour < 12) {
        greet = 'Morning'
      } else if (hour >= 12 && hour < 17) {
        greet = 'Afternoon'
      } else if (hour >= 17 && hour < 21) {
        greet = 'Evening'
      } else {
        greet = 'Night'
      }
      return greet
    }
    return allFormats  // returning factory object
  }
})()
