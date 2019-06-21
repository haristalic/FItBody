"use strict";
angular.module('fitBodyApp')
  .controller('recepies', function ($scope, $http) {
    $scope.search="";
    
    $scope.$watch('search', function() {
      apiCall();
    });
      
    function apiCall() {
        $http.get( "https://api.edamam.com/search?&q="+$scope.search+"&to=100&app_id=c3607cc5&app_key=3f6cc51402ce76557eabe753c575c891")
          .then(function(response) {
            $scope.recipes = response.data;
            console.log($scope.recipes);
          

          });
        }
      
  });