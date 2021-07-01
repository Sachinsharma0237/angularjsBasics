let myApp = angular.module('myApp', ['ngMessages', 'ngResource']);

myApp.controller('mainController', function($log, $scope, $filter, $resource){
        $scope.name = 'sachin SharMa';
        $scope.formattedname = $filter('uppercase')($scope.name);
        $log.info($scope.formattedname);
        $log.info($scope.name);
        console.log($resource);
})