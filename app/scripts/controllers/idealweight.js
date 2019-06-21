"use strict";
angular.module('fitBodyApp')
  .controller('idealWeight', function ($scope) {
  
    $scope.gender="male";
    $scope.idealWeight;
    $scope.$watchGroup(['height','age','gender'],function(newValue,oldValue){
   if (newValue !=oldValue) { 
    var correction = $scope.height - 152;
        if($scope.gender=='male'){
          $scope.idealWeight =48;
     $scope.idealWeight += (correction * 1.1);
  }else if($scope.gender=='female'){
    $scope.idealWeight =45.5;
   $scope.idealWeight += (correction * 0.9);
  }  
       }
    });
  });
