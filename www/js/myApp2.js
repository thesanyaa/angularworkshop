var myApp = angular.module('spendingApp', []);

myApp.controller("spendingController", myController);

function myController($scope, storageService, $timeout) {
  $scope.newRecord = {};

  $scope.addRecord = addRecord;

  $scope.listRecords = storageService.listRecords.bind(storageService);
  $scope.deleteRecord = storageService.deleteRecord.bind(storageService,function (message) {
    $scope.notificationmessage = message;
  });

  function addRecord() {
    storageService.addRecord($scope.newRecord, setnotificationmessage);
    $scope.newRecord = {};
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
    console.log('resetting', spendingForm)
    if (spendingForm) {
      console.log('true spendingform')
      console.log(spendingForm);
      spendingForm.$setPristine();
      spendingForm.$setUntouched();
    }
  };
}
