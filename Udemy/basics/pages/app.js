let myApp = angular.module('myApp', ['ngRoute']);

myApp.config(function($routeProvider){

    $routeProvider
    .when('/', {
        templateUrl: 'pages/main.html',
        controller: 'mainController'
    })
    .when('/second', {
        templateUrl: 'pages/second.html',
        controller: 'secondController'
    })
    .when('/second/:num',{
        templateUrl: 'pages/second.html',
        controller: 'secondController'
    })

});

myApp.service('nameService', function(){
    this.name = 'John Cena';
    this.namelength = function(){
        return this.name.length
    }
})

myApp.controller('mainController', ['$scope', '$log', 'nameService', function($scope, $log, nameService){
        $scope.name = nameService.name;
        $log.main = 'property from Main';
        $scope.$watch('name', function(){
            nameService.name = $scope.name
        });
        $log.log(nameService.name);
        $log.log(nameService.namelength());
}])
myApp.controller('secondController', ['$scope', '$log','$routeParams', 'nameService', function($scope, $log, $routeParams, nameService){
        $scope.num = $routeParams.num || 1;
        $scope.name = nameService.name;
        $scope.$watch('name', function(){
            nameService.name = $scope.name
        });

}])