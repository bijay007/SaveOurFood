'use strict'

angular.module('twitterFeed')

  .component('twitterFeed', twitterObj)

  const twitterObj = {
    template : "<div class='col-md-3 col-md-offset-1' ng-repeat='tweets in $scope.twitterList>
                  <h3>Bijay Timilsina</h3>
                  <i class='glyphicon glyphicon-thumbs-up'></i><span><a href='{{tweets}}'</a></span>
                  </div>",
    controller : function($scope) {
      $scope.twitterList : ['https://twitter.com/bjtimi_007/status/834878617117159424','https://twitter.com/bjtimi_007/status/834878617117159424','https://twitter.com/bjtimi_007/status/834878617117159424']
    }
  }