weatherApp.controller('homeController', ['$scope', 'cityService', '$location',function($scope, cityService, $location){

    $scope.city = cityService.city;
    $scope.$watch('city', function(){
        cityService.city = $scope.city;
    });

    $scope.submit = function(){
            $location.path("/forecast")
    }

}]);

weatherApp.controller('forecastController', ['$scope', 'cityService', '$routeParams',function($scope, cityService, $routeParams){

    $scope.city = cityService.city;

    $scope.days = $routeParams.days || '2'; 

    $scope.weatherResult = weatherService.GetWeather($scope.city, $scope.days)

    $scope.convertToFahrenheit = function(degK){
        return Math.round( (1.8)*(degK-273) + 32 );
    };

    $scope.convertToDate = function(dt){
        return new Date(dt*1000);
    };

    console.log($scope.weatherResult);
}]);