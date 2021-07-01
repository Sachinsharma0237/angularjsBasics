var myApp = angular.module('myApp', []);

myApp.controller('mainController', [ '$scope', function($scope){

        $scope.countries = [
            {
                name:"U.K.",
                cities:[
                    {name:"London"},
                    {name:"Birmingham"},
                    {name:"Manchester"},
                ]
            },
            {
                name:"America",
                cities:[
                    {name:"New York"},
                    {name:"California"},
                    {name:"buffalo"},
                ]
            },
            {
                name:"India",
                cities:[
                    {name:"New Delhi"},
                    {name:"Mumbai"},
                    {name:"U.P."},
                ]
            },

        ]
}])