'use strict';

describe('Controller: MealplanerCtrl', function () {

  // load the controller's module
  beforeEach(module('fitBodyApp'));

  var MealplanerCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    MealplanerCtrl = $controller('MealplanerCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(MealplanerCtrl.awesomeThings.length).toBe(3);
  });
});
