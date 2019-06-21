'use strict';

angular.module('fitBodyApp')
  .filter('total', function () {
    return function (input, property) {
      var i =  input.length;
        var total = 0;
        while (i--)
          total += input[i][property];
        return total;
      }
  });
