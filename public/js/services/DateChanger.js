// Custom service for changing HTML5 date to Timestamp & vice-versa.
// Just $inject this factory into the controller where you want to use this

(function () {
  angular
    .module('myApp')
    .factory('DateChanger', DateChanger)

  function DateChanger () {
    let allFormats = { toDayTime, add24Hrs, stateCheck }

    // function toTimeStamp (htmlDate) {     // converts html5 input date to timestamp
    //   return Date.parse(htmlDate)
    // }

    // function toDateObj (timestamp) {  // converts timestamp to date object
    //   return new Date(timestamp)
    // }

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

    // function toCompare (dateBought, dateExpiring) {
    //   var today = toDateObj(Date.now())
    //   var expireDate = toDateObj(dateExpiring)
    //   var boughtDate = toDateObj(dateBought)
    //   var expired, expiring, fresh

    //   if (today > expireDate) {
    //     expired += 1
    //   } else if ((expireDate > today && expireDate < today.setHours(today.getHours() + 24)) || boughtDate < expireDate) {
    //     expiring += 1
    //   } else {
    //     fresh += 1
    //   }
    //   return [expired, expiring, fresh]
    // }

    function add24Hrs () {
      var today = new Date()
      today.setHours(today.getHours() + 24)
      return new Date(today)
    }

    function stateCheck (date) {
      var state = ''
      var jsDate = new Date(Date.parse(date))
      if (new Date(Date.now()) > jsDate) {
        state = 'Expired'
      } else if ((jsDate > new Date(Date.now()) && (jsDate < add24Hrs()))) {
        state = 'Expiring'
      } else {
        state = 'Fresh'
      }
      return state
    }

    return allFormats  // returning factory object
  }
})()
