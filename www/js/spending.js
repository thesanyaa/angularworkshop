var spendingApp = angular.module('spendingApp', [])
    .controller('spendingController',function ($scope) {

      var myTransactions = [];
      $scope.addToList = function () {
        myTransactions.push({description : $scope.description, amount: $scope.amount, date: $scope.date})
        $scope.date = '';
        $scope.description = '';
        $scope.amount = "";
      }

      $scope.transactions = myTransactions;
    })
