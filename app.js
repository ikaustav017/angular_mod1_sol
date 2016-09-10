(function () {
'use strict';

angular.module('LunchCheck', [])
.controller('LunchCheckController', MsgController);

MsgController.$inject = ['$scope'];
function MsgController($scope) {
  $scope.lunchItems = "";
  $scope.diplayMessage = "";

  $scope.displayAptMessage = function () {

    if($scope.lunchItems==""){
      $scope.diplayMessage ="Please enter data first";
      return;
    }
    var noOfitems = numOfItems($scope.lunchItems);
    if(noOfitems<=3){
      $scope.diplayMessage ="Enjoy!";
    }else if(noOfitems>3) {
      $scope.diplayMessage ="Too much!";
    }
  };

  function numOfItems(items){
    //console.log(items)
    var trimmedItems = items.trim();
    var elements = trimmedItems.split(',');

      console.log(elements);
    return elements.length;

  };
}

})();
