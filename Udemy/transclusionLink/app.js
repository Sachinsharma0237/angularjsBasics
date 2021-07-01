var myApp = angular.module('myApp', ['ngRoute']);

myApp.config(function ($routeProvider) {
    
    $routeProvider
    
    .when('/', {
        templateUrl: 'pages/main.html',
        controller: 'mainController'
    })
    
    .when('/second', {
        templateUrl: 'pages/second.html',
        controller: 'secondController'
    })
    
    .when('/second/:num', {
        templateUrl: 'pages/second.html',
        controller: 'secondController'
    })
    
});

myApp.controller('mainController', ['$scope', '$log', function($scope, $log) {
    
    $scope.people = 
        [{
        name: 'Sachin Sharma',
        address: '128 Main St.',
        city: 'Delhi',
        state: 'ND',
        zip: '11205'
        },
        {
        name: 'Elon Musk',
        address: '555 Side St.',
        city: 'Paris',
        state: 'Pr',
        zip: '8564'
        },
        {
        name: 'John Doe',
        address: '555 Main St.',
        city: 'New York',
        state: 'Ny',
        zip: '52413'
        }]

    $scope.formattedAddress = function(person){

        return person.address + ', ' + person.city + ', ' +  person.state + ', ' + person.zip;
    }
    
}]);

myApp.controller('secondController', ['$scope', '$log', '$routeParams', function($scope, $log, $routeParams) {
    
    
    
}]);

myApp.directive("searchResult", function() {
   return {
       restrict: 'AECM',
       templateUrl: 'directives/searchresult.html',
       replace: true,
       scope: {
           personObject: "=",
           formattedAddressFunction: "&"
       },
       transclude: true,
       link:  function(scope, elements, attrs){
                    console.log("link.....");
                    console.log(scope);

                    // if(scope.personObject.name="Sachin Sharma"){
                    //     elements.removeAttr('class');
                    // }

                    console.log(elements.html());
                }

            }
});
