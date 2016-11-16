
var myApp = angular.module('myApp', [])
    .controller('bodyController',function ($scope) {


      $scope.repeatString = function () {
        var finalString = "";
        for(var i = 0 ; i < $scope.number ; i++)
        {
          finalString += $scope.String;
        }
        $scope.String = finalString;

      }
    })
