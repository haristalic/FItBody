"use strict";
angular.module('fitBodyApp')
  .controller('CaloriecalculatorCtrl', function ($scope) {
 
 $scope.gender="male";   
 $scope.activitys=[  
  {  
     activityName:"Basal Metabolic Rate (BMR)",
     value:1
  },
  {  
     activityName:"Sedentary - little or no exercise",
     value:1.2
  },
  {  
     activityName:"Lightly Active - exercise 1-3 week",
     value:1.375
  },
  {  
     activityName:"Moderatetely Active - exercise 3-5 week",
     value:1.55
  },
  {  
     activityName:"Very Active - hard exercise 6-7 week",
     value:1.725
  },
  {  
     activityName:"Extra Active -hard exercise or physical job",
     value:1.9
  }
];
      $scope.$watchGroup(['age','height','weight','gender','typeOfActivity'],function(newValue,oldValue){
        if (newValue !==oldValue) { 
          $scope.corection=0;
          if($scope.gender==='male'){
            $scope.corection = 5;}
            else if($scope.gender==='female'){
               $scope.corection = -161;} 
      $scope.calorieResult=(10 * $scope.weight + 6.25 * $scope.height - 5 * $scope.age +  $scope.corection) *$scope.typeOfActivity;
            }
         });

  });
