var myApp = angular.module('myApp', []);

myApp.controller('mainController', [ '$scope', function($scope){

        var employees = [
            {
                name:"Sachin",
                dateOfBirth: new Date("November 23, 1980"),
                gender:"Male",
                salary:85000.562
            },
            {
                name:"Steve",
                dateOfBirth: new Date("December 3, 1940"),
                gender:"Male",
                salary:65800.458
            },
            {
                name:"Mark",
                dateOfBirth: new Date("January 15, 1990"),
                gender:"Male",
                salary:55850.999
            },
            {
                name:"Tony",
                dateOfBirth: new Date("April 5, 2000"),
                gender:"Male",
                salary:74000.021
            }    
            
        ]
        $scope.employees = employees;
        $scope.rowLimit = 4;

        $scope.sortColumn = "name"


}])

