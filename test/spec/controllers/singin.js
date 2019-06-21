'use strict';

describe('Controller: SinginCtrl', function () {

  // load the controller's module
  beforeEach(module('fitBodyApp'));

  var SinginCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    SinginCtrl = $controller('SinginCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(SinginCtrl.awesomeThings.length).toBe(3);
  });
});
