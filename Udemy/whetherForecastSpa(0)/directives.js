weatherApp.directive("weatherReport", function(){
    return{
        restrict: 'E',
        templateUrl: 'directives/whetherReport.html',
        replace: true,
        scope: {
            weatherDay: "=",
            convertToStandard: "&" ,
            convertToDate: "&" ,
            dateFormat: "@" ,
        }
    }
})