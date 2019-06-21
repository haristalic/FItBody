'use strict';
var firebaseConfig = {
  apiKey: "AIzaSyCJysvDK6fn8ls3F53rr9IVfKXYyxOwyZU",
  authDomain: "fitbodyapp-cd2bb.firebaseapp.com",
  databaseURL: "https://fitbodyapp-cd2bb.firebaseio.com",
  projectId: "fitbodyapp-cd2bb",
  storageBucket: "fitbodyapp-cd2bb.appspot.com",
  messagingSenderId: "481013677818",
  appId: "1:481013677818:web:56f1b2a97f2b186d"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
angular.module('fitBodyApp')
  .controller('mangeUser', function ($scope,$firebaseAuth,$firebase,firebaseUser,$location,$firebaseObject,$firebaseArray) {
    $scope.isActive = function(viewLocation) {
      return viewLocation === $location.path();
  };
    var auth=$firebaseAuth();
    auth.$onAuthStateChanged(function(firebaseUser){
      if(firebaseUser){
       $scope.logIn=true;
      }
      else{
        $scope.logIn=false;
      }
    })
    var user=firebaseUser.getUser();
    if(user!=null){$scope.userName=user.split("@")[0];}
    var ref = firebase.database().ref('history');
    $scope.userHistory = $firebaseArray(ref);
    $scope.userHistory.$loaded()
    .then(function(){
        console.log($scope.userHistory);
    });
    if(!$scope.userName){
      $location.path('/index');
    }
    $scope.logout=function(){
      firebaseUser.logoutUser();
    }
  });
