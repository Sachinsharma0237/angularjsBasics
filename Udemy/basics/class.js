let myApp = angular.module('myApp', []);
myApp.controller('mainController', ['$scope', '$filter', '$timeout',  function($scope, $filter, $timeout){
    $scope.handle = '';
    $scope.lowerCaseHandler = function(){
        return $filter('lowercase')($scope.handle);
    }
    $scope.$watch( 'handle', function(newValue, oldValue){
        console.info("changed!");
        console.log('old:' + oldValue);
        console.log('New:' + newValue);
    })
    $scope.characters = 5;

    $scope.rules = [
        { rulename : "Must be 5 Characters" },
        { rulename : "Mustn't be anywhere else" },
        { rulename : "Must be Cool"}
    ];
    console.info($scope.rules);

}])