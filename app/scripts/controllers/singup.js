'use strict';

angular.module('fitBodyApp')
  .controller('singupCtrl', function ($scope,$firebaseAuth,$location,firebaseUser) {

    $scope.signUp=function(){
      var userName=$scope.user.email;
      var password=$scope.user.password;
      var auth=$firebaseAuth();
     
      auth.$createUserWithEmailAndPassword(userName,password).then(function(user){
     
        $scope.errMsg=false;
       if($scope.errMsg==false){
        var options = {
          style: {
            main: {
              background: "#4c8c4a",
              color: "white",
              border: "2px solid #4c8c4a",
              'border-radius': "10px",
              width:"500px"
            }
          }
        };
        
        iqwerty.toast.Toast('Sign up successfully.Now log in!', options);
       }
        $location.path('/login');

      }).catch(function(error){
        console.log(error);
        $scope.errMsg=true;
        $scope.errMessage=error.message;
      })
   };
    
  });
