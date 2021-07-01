let myApp = angular.module('myApp', []);
myApp.controller('mainController', ['$scope', '$filter', function($scope, $filter){
    $scope.handle = '';
    $scope.lowerCaseHandler = function(){
        return $filter('lowercase')($scope.handle);
    }
}])