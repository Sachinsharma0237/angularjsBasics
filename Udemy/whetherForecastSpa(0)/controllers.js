weatherApp.controller('homeController', ['$scope', 'cityService', function($scope, cityService){

    $scope.city = cityService.city;
    $scope.$watch('city', function(){
        cityService.city = $scope.city;
    });
}]);

weatherApp.controller('forecastController', ['$scope', 'cityService', '$resource', '$routeParams',function($scope, cityService, $resource, $routeParams){

    $scope.city = cityService.city;

    $scope.days = $routeParams.days || 2; 

    $scope.weatherAPI = $resource("http://api.openweathermap.org/data/2.5/forecast?id=524901&appid=59b8c7b44d623f9e07b3ad031b19b400",
                { callback:"JSON_CALLBACK" }, { get: { method: "JSONP" }});
    $scope.weatherResult = $scope.weatherAPI.get({ cnt: $scope.days});

    $scope.convertToFahrenheit = function(degK){
        return Math.round( (1.8)*(degK-273) + 32 );
    };

    $scope.convertToDate = function(dt){
        return new Date(dt*1000);
    };

    console.log($scope.weatherResult);
}]);
