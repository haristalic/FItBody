'use strict';

describe('Filter: tdTotal', function () {

  // load the filter's module
  beforeEach(module('fitBodyApp'));

  // initialize a new instance of the filter before each test
  var tdTotal;
  beforeEach(inject(function ($filter) {
    tdTotal = $filter('tdTotal');
  }));

  it('should return the input prefixed with "tdTotal filter:"', function () {
    var text = 'angularjs';
    expect(tdTotal(text)).toBe('tdTotal filter: ' + text);
  });

});
