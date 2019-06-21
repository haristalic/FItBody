"use strict";

angular
  .module('fitBodyApp', [
  
    'firebase',
    'ngAnimate',
    'angularUtils.directives.dirPagination',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/home.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/calculators', {
        templateUrl: 'views/calculators.html',
      
      }).when('/recepies', {
        templateUrl: 'views/recepies.html',
      
      }).when('/singup', {
        templateUrl: 'views/singup.html',
      
      }).when('/mealplaner', {
        templateUrl: 'views/mealplaner.html',
      
      }).when('/login', {
        templateUrl: 'views/login.html',
      
      })
      .otherwise({
        redirectTo: '/'
      });
  });
