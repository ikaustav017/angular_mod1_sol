(function () {
'use strict';

angular.module('LunchCheck', [])
.controller('LunchCheckController', MsgController);

MsgController.$inject = ['$scope'];
function MsgController($scope) {
  $scope.lunchItems = "";
  $scope.diplayMessage = "";
  $scope.myStyle ="";

  $scope.displayAptMessage = function () {

    if($scope.lunchItems==""){
      $scope.diplayMessage ="Please enter data first";
      $scope.myStyle={color:'red'};
      return;
    }
    var noOfitems = numOfItems($scope.lunchItems);
    if(noOfitems<=3){
      $scope.diplayMessage ="Enjoy!";
      $scope.myStyle={color:'green'};
    }else if(noOfitems>3) {
      $scope.diplayMessage ="Too much!";
      $scope.myStyle={color:'green'};
    }
  };

  function numOfItems(items){
    //console.log(items)
    var trimmedItems = items.trim();
    var elements = trimmedItems.split(',');
    var size =0;
      //console.log(elements);
     // console.log(elements.length);
      for(var i=0; i<elements.length;i++){

        if( !(elements[i].trim()==="")){
          // console.log(elements[i]);
          size+=1;
        }
      }
       console.log(size);
    return  size; 

  };
}

})();
