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
    // setTimeout(function(){
    //     $scope.$apply(function(){
    //         $scope.handle = 'NewTwitterhandle';
    //         console.log('Scope Changed');
    //     })
    // }, 3000)
                    // (or)
    $timeout( function(){
        $scope.handle = 'NewValue';
        console.log("scope Changed");
    }, 3000)


}])