'use strict';

describe('Controller: IdealweightCtrl', function () {

  // load the controller's module
  beforeEach(module('fitBodyApp'));

  var IdealweightCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    IdealweightCtrl = $controller('IdealweightCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(IdealweightCtrl.awesomeThings.length).toBe(3);
  });
});
