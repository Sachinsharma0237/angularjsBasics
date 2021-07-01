var myApp = angular
            .module('myApp', [])
            .controller('mainController', [ '$scope', function($scope){
            var countries = [
                {
                    name: 'India',
                    cities: [
                        { name : "Delhi" },
                        { name : "Mumbai"}
                    ]
                },
                {
                    name: 'USA',
                    cities: [
                        { name : "New York" },
                        { name : "California"}
                    ]
                },
                {
                    name: 'Canada',
                    cities: [
                        { name : "Toronto" },
                        { name : "Vancouver"}
                    ]
                }
            ]
            $scope.countries = countries;
}])

