var myApp = angular
            .module('myApp', [])
            .controller('mainController', [ '$scope', function($scope){
            var employees = [
                { name:"Sachin", gender:"Male", salary:"$85000" },
                { name:"Steve", gender:"Male", salary:"$85800" },
                { name:"Natasha", gender:"Female", salary:"$65000" },
                { name:"Hulk", gender:"Male", salary:"$84000" },
                { name:"Cap America", gender:"Male", salary:"$35000" },
            ]
            $scope.employees = employees;
            $scope.employeeView = "employeeTable.html"

}])

