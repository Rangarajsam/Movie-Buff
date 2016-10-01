var common = angular.module('commonModule', []);
common.controller('CommonController', ['$scope', '$location', 'dashboardService', function ($scope, $location, dashboardService) {
    $scope.highlightMenu = function (view) {
        return ($location.path() === view) ? 'active' : '';
    };
    $scope.hideCommonItems = function (view) {
        for (i = 0; i < view.length; i++) {
            if ($location.path() === view[i]) {
                return true;
            }
        }
    };
    $scope.showMoviePage = function () {
        $location.path('/movies/' + $scope.searchText);
    };
    $scope.dropDown = false;
    $scope.showDropDown = function () {
        $scope.dropDown = true;
        var searchMovies = dashboardService.getSearchMovies($scope.searchText);
        searchMovies.then(function (res) {
            $scope.results = res.data.results;
        });
    };
    $scope.hideDropDown=function(){
        $scope.dropDown = false;
        $scope.searchText="";
    };

}]);