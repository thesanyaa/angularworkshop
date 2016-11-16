angular.module('spendingApp')
  .controller("listAllController", listAllController);

function listAllController($scope, storageService) {
  $scope.listRecords = storageService.listRecords.bind(storageService);
}
