'use strict';

angular.module('fitBodyApp')
  .controller('logIn', function ($window, $scope, $firebaseAuth, $location, firebaseUser) {
  
    $scope.userName = firebaseUser.getUser();
    if ($scope.userName) {
      $location.path('/mealplaner');
    }
    $scope.singUpModal = function () {
      $(".modal").modal("hide");
     
    };
    //funkcija za log in korisnika
    $scope.signIn = function () {
      var userName = $scope.user.email,
       password = $scope.user.password,
       auth = $firebaseAuth();
    
      auth.$signInWithEmailAndPassword(userName, password).then(function (user) {
        $window.location.reload();
        $(".modal").modal("hide");
        firebaseUser.setUser($scope.user.email);
        $location.path('/mealplaner');
        $scope.errMsg = false;
        

      }).catch(function (error) {
        console.log(error);
        $scope.logIn = false;

        $scope.errMsg = true;
        $scope.errMessage = error.message;
      })
    };
    
    var auth = $firebaseAuth();
    
    auth.$onAuthStateChanged(function (firebaseUser) {
      if (firebaseUser) {
        var user = firebase.auth().currentUser;
     
        localStorage.setItem('uid', firebaseUser.uid);
      }
      else {

        console.log("sing out");
      }

    });
  })