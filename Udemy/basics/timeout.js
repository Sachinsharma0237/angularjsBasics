var myApp = angular.module('myApp', ['ngMessages', 'ngResource']);

myApp.controller('mainController', ['$scope', '$timeout', function($scope, $timeout){
    $scope.name = 'Sachin Sharma';
    $timeout( function(){
        $scope.name = 'Steve jobs';
    }, 3000)

}])