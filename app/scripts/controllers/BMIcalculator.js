"use strict";

angular.module('fitBodyApp')
  .controller("BMIcontroller", function ($scope) {
 
  $scope.$watchGroup(['height','weight'],function(newValue,oldValue){
     if (newValue !==oldValue) {
       var bmiIndex=  $scope.bmiIndex=$scope.weight/(($scope.height/100)*($scope.height/100));

 if (bmiIndex < 16) {
  $scope.bmiC = "Severe Thinness";
} else if (bmiIndex >= 16 && bmiIndex < 17) {
  $scope.bmiC = "Moderate Thinness";
} else if (bmiIndex >= 17 && bmiIndex < 18.5) {
  $scope.bmiC = "Mild Thinness";
} else if (bmiIndex >= 18.5 && bmiIndex < 25) {
  $scope.bmiC = "Normal";
} else if (bmiIndex >= 25 && bmiIndex < 30) {
  $scope.bmiC = "Overweight";
} else if (bmiIndex >= 30 && bmiIndex < 35) {
  $scope.bmiC = "Obese Class I";
} else if (bmiIndex >= 35 && bmiIndex < 40) {
  $scope.bmiC = "Obese Class II";
} else if (bmiIndex >= 40) {
  $scope.bmiC = "Obese Class III";
}

     }
  });

    
  });
