let myApp = angular.module('myApp', []);

myApp.controller('mainController', ['$scope', '$filter', '$timeout', function($scope, $filter, $timeout){

    $scope.alertClick = function(){
        alert("Clicked!!!");
    }
    $scope.name = 'Sachin sharma';

    var rulesRequest = new XMLHttpRequest();
    rulesRequest.onreadystatechange = function(){
        if( rulesRequest.readyState == 4 && rulesRequest.status == 200 ){
            $scope.rules = JSON.parse(rulesRequest.responseText);
            console.log($scope.rules);
        }
    }
}]);