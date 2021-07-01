var myApp = angular.module("myApp", ["ngRoute"])
                   .config(function($stateProvider){
                        $stateProvider
                        .state("home", {
                            url:"/home",
                            templateUrl:"Templates/home.html",
                            controller:"homeController"
                        })
                        .state("courses", {
                            url:"/courses",
                            templateUrl:"Templates/courses.html",
                            controller:"coursesController",
                            caseInsensitiveMatch:true
                        })
                        .state("students", {
                            url:"/students",
                            templateUrl:"Templates/students.html",
                            controller:"studentsController"
                        })
                        .otherwise({
                            redirectTo:"/home"
                        })
                   })
                   .controller("homeController", ["$scope", "$route", "$http", function($scope, $route, $http){

                        $scope.$on("$routeChangeStart", function(event, next, current){
                            if(!confirm("Are you sure you want to leave this page?" + next.$$route.originalPath)){
                                event.preventDefault();
                            }
                        })
                        $scope.message = "Home Page"
                   }])
                   .controller("coursesController",["$rootScope", "$http", "$log", "$route" ,"$scope",function($rootScope, $http, $log, $route, $scope){

                        $rootScope.$on("$locationChangeStart", function(event, next, current){
                            $log.debug("$locationChangeStart Fired");
                            $log.debug(event);
                            $log.debug(next);
                            $log.debug(current);
                        })
                        $rootScope.$on("$routeChangeStart", function(event, next, current){
                            $log.debug("$routeChangeStart Fired");
                            $log.debug(event);
                            $log.debug(next);
                            $log.debug(current);
                        })
                        $rootScope.$on("$locationChangeSuccess", function(event, next, current){
                            $log.debug("$locationChangeSuccess Fired");
                            $log.debug(event);
                            $log.debug(next);
                            $log.debug(current);
                        })
                        $rootScope.$on("$routeChangeSuccess", function(event, next, current){
                            $log.debug("$routeChangeSuccess Fired");
                            $log.debug(event);
                            $log.debug(next);
                            $log.debug(current); 
                        })
                        $scope.courses = ["C#", "C++", "JAVA", "javaScript", "R", "goLang"];
                   }])
                   .controller("studentsController", ["$scope", "$http", "$state",function($scope, $http, $state){
                        
                        this.reloadData = function(){
                            $state.reload();
                        }

                        $http.get("https://jsonplaceholder.typicode.com/posts")
                             .then(function(response){
                                 console.log(response);
                                 $scope.students = response.data;
                             })
                   }])