let myApp = angular.module('myApp', []);

myApp.controller('mainController',['$scope', '$filter', '$http', function(){
    window.addEventListener('hashchange', function(){
        console.log("Hash changed!:", window.location.hash);

        if(window.location.hash === '#/bookmark/1'){
            console.log("page 1 is cool");
        }
        if(window.location.hash === '#/bookmark/2'){
            console.log("page 2 is cool");
        }
        if(window.location.hash === '#/bookmark/3'){
            console.log("page 3 is cool");
        }





    })
}])