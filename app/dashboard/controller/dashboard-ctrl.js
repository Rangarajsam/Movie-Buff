var dashboardModule = angular.module("dashboardModule", []);
dashboardModule.controller("dashboardController", ["$scope","$location","dashboardService", function ($scope,$location, dashboardService) {

    $scope.dashboard = dashboardService.dashboard;
    var allMoviesPromise = dashboardService.getAllMovies();
    allMoviesPromise.then(function(movies){
        $scope.latestMovies=movies[0].data.results;
        $scope.popularMovies=movies[1].data.results;
        $scope.upcomingMovies=movies[2].data.results;
        $scope.topRatedMovies=movies[3].data.results;
    });

}]);