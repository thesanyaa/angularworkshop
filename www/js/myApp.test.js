var expect = chai.expect;

describe('Testing', function () {
  it('is rrunning properly',function () {

  });
});


describe('myApp', function () {
  beforeEach(function () {
    module('myApp');
  });
  it('it has a bodyController',inject(function ($controller) {
      var c = $controller('bodyController', {$scope: {}});
      expect(c).to.exist;
  }));

  it(' s bodyController',inject(function ($controller) {

    var scope = {};
    var c = $controller('bodyController',{
      $scope: scope
    });
    console.log(scope);
    expect(scope.repeatString).to.exist;
    expect(scope.repeatString).to.be.a('function');
  }));

  it(' s bodyController addRecords() works properle ',inject(function ($controller) {
    var newRecord = {};
    var records = [];

    var scope = {
      newRecord: newRecord,
      records : records
    };
    var c = $controller('bodyController',{
     $scope : scope
    });
    expect(scope)
    expect(scope.records).to.be.instanceOf(Array);
    // expect(scope.records).to.have.lengthOf(0);
    expect(scope.repeatString).to.not.throw;
    // expect(scope.records).to.have.lengthOf(1);

  }));


});