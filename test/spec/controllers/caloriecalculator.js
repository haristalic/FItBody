'use strict';

describe('Controller: CaloriecalculatorCtrl', function () {

  // load the controller's module
  beforeEach(module('fitBodyApp'));

  var CaloriecalculatorCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    CaloriecalculatorCtrl = $controller('CaloriecalculatorCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(CaloriecalculatorCtrl.awesomeThings.length).toBe(3);
  });
});
