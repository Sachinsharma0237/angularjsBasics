var myApp = angular.module('myApp', []);
myApp.controller('mainController', function($log, $scope, $filter){
    $log.log("hello");
    $log.info("This is information");
    $log.warn("Some debug info while writing my code");
    $log.debug("Some Debug info while writing my code");
    $log.error("this is new Error");
    console.log($log);
})