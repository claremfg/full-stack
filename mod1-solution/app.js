(function(){

'use strict';
var comma = ',';
var msgEnjoy = "Enjoy!";
var msgTooMuch = "Too much!";
var msgEnterData = "Please enter data first";

angular.module('LunchCheck', [])
.controller('LunchCheckController',LunchCheckController);

LunchCheckController.$inject = ['$scope'];
function LunchCheckController($scope) {
  $scope.lunchItems = "";
  $scope.message = "";
  $scope.messageType = "";

  $scope.checkItems = function() {
    //console.log("lunchItems = ", $scope.lunchItems);
    if ($scope.lunchItems === ""){
      $scope.message = msgEnterData;
      $scope.messageType = "Error";
      return;
    }

    var splitLunchItems = $scope.lunchItems.split(comma);
    var numItems = numActualItems(splitLunchItems);
    //console.log("numItems = ", numItems);

    $scope.messageType = "Info";
    if (numItems <= 3) {
      $scope.message = msgEnjoy;
    }else {
      $scope.message = msgTooMuch;
    }
  }

  function numActualItems(splitItems) {
    var count = 0;
    for (var i = 0; i < splitItems.length; i++) {
      //console.log("splitItem = ", splitItems[i]);
      //console.log("splitItem.length = ", splitItems[i].length);
      if (splitItems[i].trim() !== ""){
        count++;
      }
      // console.log("splitItem.trim().length = ", splitItems[i].trim().length);
    }

    return count;

  }
}



})();
