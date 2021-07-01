var myApp = angular
            .module("myApp", ["ui.router"])
            .controller("redColorController",['$scope', '$rootScope', function($scope, $rootScope){
                $scope.redColor = "Hi, I'm Red Color";
                $rootScope.rootScopeColor = "I'm Root Scope Color";
            }])
            