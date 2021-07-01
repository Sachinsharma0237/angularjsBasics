var myApp = angular
            .module('myApp', [])
            .controller('mainController', [ '$scope', function($scope){
            var employees = [
                {
                    name:"Sachin",
                    dateOfBirth: new Date("November 23, 1980"),
                    gender:1,
                    salary:85000.562
                },
                {
                    name:"Steve",
                    dateOfBirth: new Date("December 3, 1940"),
                    gender:1,
                    salary:65800.458
                },
                {
                    name:"Mark",
                    dateOfBirth: new Date("January 15, 1990"),
                    gender:2,
                    salary:55850.999
                },
                {
                    name:"Tony",
                    dateOfBirth: new Date("April 5, 2000"),
                    gender:3,
                    salary:74000.021
                }    
                
            ]
            $scope.employees = employees;
            $scope.search = function(item){
                if($scope.searchText == undefined){
                    return true;
                }else{
                    if( item.name.toLowerCase().indexOf($scope.searchText.toLowerCase()) != -1 ||
                    item.salary.toLowerCase().indexOf($scope.searchText.toLowerCase()) != -1  ){
                        return true;
                    }
                }
                return false;
            }
}])

