var myApp = angular
            .module('myApp', [])
            .controller('mainController', [ '$scope', '$location', '$anchorScroll',function($scope, $location, $anchorScroll){
                $scope.scrollTo = function(scrollLocation){
                    $location.hash(scrollLocation);
                    $anchorScroll.yOffset = 20; //Space bw the element and the browser
                    $anchorScroll();
                }
}])

