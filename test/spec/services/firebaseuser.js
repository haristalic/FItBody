'use strict';

describe('Service: fireBaseUser', function () {

  // load the service's module
  beforeEach(module('fitBodyApp'));

  // instantiate service
  var fireBaseUser;
  beforeEach(inject(function (_fireBaseUser_) {
    fireBaseUser = _fireBaseUser_;
  }));

  it('should do something', function () {
    expect(!!fireBaseUser).toBe(true);
  });

});
