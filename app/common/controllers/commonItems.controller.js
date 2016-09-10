var common = angular.module('commonModule', []);
common.controller('CommonController', ['$scope', '$location', function ($scope, $location) {
    $scope.highlightMenu = function (view) {
        return ($location.path() === view) ? 'active' : '';
    }
    $scope.hideCommonItems = function (view) {
       for(i=0;i<view.length;i++) {
           if($location.path() === view[i]){
               return true;
           }
        }
    }
}]);