let myApp = angular.module('myApp', []);

myApp.controller('mainController', function($scope){
    $scope.name = 'Sachin Sharma';
    $scope.occupation = 'Coder';
    $scope.getName = function(){
        return 'Steve Jobs';
    }
    console.log($scope);
    console.log($scope.getName());
})

let searchPeople = function($scope, lastName, $log, age, occupation){
    return 'Sachin Sharma';
}
let searchPeopleString = searchPeople.toString();
console.log(searchPeopleString);

console.log(angular.injector().annotate( searchPeople ));

