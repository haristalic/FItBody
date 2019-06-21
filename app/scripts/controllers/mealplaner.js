'use strict';

var myApp = angular.module('fitBodyApp')
  .controller('MealplanerCtrl', function ($scope,$firebaseObject,$firebaseArray, $route, $location, $http, $firebaseAuth, firebaseUser) {
//API
    $scope.$watch('search', function () {
      apiCall();
    });
       function apiCall() {
      $http.get("https://api.edamam.com/api/food-database/parser?ingr=" + $scope.search + "&nutrition-type=logging&categoryLabel=food&category=generic-foods&app_id=ea7b0f67&app_key=8c9fb4b3c22952de4965f8487cd3761e")
        .then(function (response) {
          $scope.recipes = response.data;
        });

    } 
  
    
    var ref=firebase.database().ref('users').child(localStorage.getItem('uid'));//MAKE DB 
      $scope.check=true; 
      
      //funkcija u kojoj se pokupe odabrani podaci sa api
    $scope.addFood = function (calories, label,protein,fat) {  
     
   if (protein===undefined){
     protein=0;
   }
   if (fat===undefined){
    fat=0;
  }  $scope.food = {
        calories: calories,
        label: label,
        protein:protein,
        fat:fat

      };

   
      $route.reload();
      $scope.advstatus = true; };     
      
      //funkcija u kojoj se pravi baza  
    $scope.addFoodToDataBase = function () { 
   
      $firebaseArray(ref).$add($scope.food).then(function (ref) {
      });
    }
   
    
    $scope.msgAddFood = function () {

      var options = {
        style: {
          main: {
            width: "500px",
            background: "#66bb6a",
            color: "white",
            
          }
        }
      };
      iqwerty.toast.Toast('Food added', options);
       $scope.search = " ";
      }

      $scope.msgRemoveFodd=function(){
         var options = {
        style: {
          main: {
            width: "500px",
            background: "#d32f2f",
            color: "white",
            
          }
        }
      };
      iqwerty.toast.Toast('Food deleted', options);
      }
      //====================================


    //funkcija za brisanje iz baze
    $scope.removeFood = function (info) {
   $scope.data
        .$remove(info)
        .then(
          function (ref) {

          },
          function (error) {

          })
    }
    //========================================
    //citanje iz baze
    $scope.data = $firebaseArray(ref);//u varijabli data je sve sto je upisano u bazi

//===================================
    $scope.userName = firebaseUser.getUser();
   
    if (!$scope.userName) {
      $location.path('/index');
    }   $scope.userData=$firebaseObject(ref);
    var obj=$firebaseObject(ref);

   
      //=============================================
    $scope.doneEating=function(){ 
      var options = {
        style: {
          main: {
            width: "500px",
            background: "#1b5e20",
            color: "white",
            
          }
        }
      };  console.log($scope.userData);
      iqwerty.toast.Toast('Food Diary ended', options);
     
 $scope.userData.$remove();

    };
  });
