var myApp = angular.module('myApp', []);

myApp.controller('mainController', function($scope){
    $scope.name = 'Sachin Sharma';
    $scope.occupation = 'Coder';
    $scope.getName = function(){
        return 'Steve Jobs';
    }
    console.log($scope);
    console.log($scope.getName());
})
