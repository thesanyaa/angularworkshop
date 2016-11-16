var myApp = angular.module('spendingApp', ['ngRoute']);

myApp.config(function($routeProvider, $locationProvider) {
  $routeProvider
      .when('/all', {
        templateUrl: 'templates/listAllrecords.tmpl.html',
        controller: 'listAllController'
      })
      .otherwise({
        templateUrl: 'templates/list10.tmpl.html',
        controller: 'spendingController'});
  $locationProvider
      .html5Mode({
        enabled: true,
        requireBase: false,
        rewriteLinks: true
      })
});

myApp.controller("spendingController", myController);

function myController($scope, storageService, $timeout) {
  $scope.newRecord = {};

  $scope.addRecord = addRecord;

  $scope.listRecords = storageService.listRecords.bind(storageService);
  $scope.deleteRecord = storageService.deleteRecord.bind(storageService,function (message) {
    $scope.notificationmessage = message;
  });

  function addRecord() {
    if($scope.newRecord.amount) {
      storageService.addRecord($scope.newRecord, setnotificationmessage);
    }
  }
  function setnotificationmessage(message) {
    $scope.notificationmessage = message;
    $timeout(function () {$scope.notificationmessage = '';},3000)
  }
  $scope.closenotification = function ()
  {
    $scope.notificationmessage = '';
  }

  $scope.reset = function(spendingForm) {
    console.log(spendingForm);
    console.log($scope.newRecord.amount);

    if (spendingForm && $scope.newRecord.amount) {

        console.log("resetting form");
        $scope.newRecord = {};
        spendingForm.$setPristine();
        spendingForm.$setUntouched();
      }
      else
    {
      spendingForm.AmountInput.$setTouched();
    }

  };
}
