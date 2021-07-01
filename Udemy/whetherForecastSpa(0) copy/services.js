weatherApp.service('cityService', function(){
    this.city = "New York, NY"
});

weatherApp.service('weatherService', ['$resource', function($resource){

    this.GetWeather = function(city, days){
        var weatherAPI = $resource("http://api.openweathermap.org/data/2.5/forecast?id=524901&appid=59b8c7b44d623f9e07b3ad031b19b400",
                    { callback:"JSON_CALLBACK" }, { get: { method: "JSONP" }});
               return weatherResult = weatherAPI.get({ cnt: days});
    }


}]);