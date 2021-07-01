var myApp = angular
            .module('myApp', [])
            .controller('mainController', [ '$scope', '$http', '$log', 'stringService',function($scope, $http, $log, stringService){
                $scope.transformString = function(input){
                    
                    $scope.output =  stringService.processString(input);       
                }

}])

