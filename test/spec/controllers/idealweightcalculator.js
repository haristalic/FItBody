'use strict';

describe('Controller: IdealweightcalculatorCtrl', function () {

  // load the controller's module
  beforeEach(module('fitBodyApp'));

  var IdealweightcalculatorCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    IdealweightcalculatorCtrl = $controller('IdealweightcalculatorCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(IdealweightcalculatorCtrl.awesomeThings.length).toBe(3);
  });
});
