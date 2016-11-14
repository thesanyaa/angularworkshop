var myApp = angular.module('myApp', [])
    .controller('bodyController',function ($scope) {


      $scope.repeatString = function () {

        let finalString = "";
        for(let i = 0 ; i < $scope.number ; i++)
        {
          finalString += $scope.String;
        }
        $scope.String = finalString;


      }


    })
