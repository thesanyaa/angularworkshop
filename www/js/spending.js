var spendingApp = angular.module('spendingApp', [])
    .controller('spendingController',function ($scope) {

      var myTransactions = [];
      $scope.transactions = myTransactions;
      var id = 0 ;
      $scope.addToList = function () {
        if($scope.amount !== undefined) {
          myTransactions.push({description: $scope.description, amount: $scope.amount, date: $scope.date, id: id})
          id = id + 1;
          $scope.date = '';
          $scope.description = '';
          $scope.amount = "";
          $scope.reset(this.spendingForm);
          console.log(myTransactions);
        }
      }

      $scope.reset = function(spendingForm) {
        if (spendingForm) {
          console.log(spendingForm);
          spendingForm.$setPristine();
          spendingForm.$setUntouched();
        }
      };

      $scope.deleteTransaction = function(idinp){

        // myTransactions.splice(idinp,1);
        myTransactions =  myTransactions.filter(function (trans) {
          console.log(trans.id);
          return trans.id != idinp;
        })
        $scope.transactions = myTransactions;

      }
    })
