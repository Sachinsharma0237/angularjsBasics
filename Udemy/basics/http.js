let myApp = angular.module('myApp', []);
myApp.controller('mainController', [ '$scope', '$filter', '$http', function($scope, $filter, $http){

    $http.get('/api')
        .success(function(data){
            $scope.rules = result;
        })
        .error( function(data, status){
            console.log(data);
        })

        $scope.newRule = '';
        $scope.addRule = function(){
            $http.post('/api', {newRule: $scope.newRule})
                .success(function(result){

                })
                .error(function(data, status){
                    console.log("error",data);
                })
        }
     
}])