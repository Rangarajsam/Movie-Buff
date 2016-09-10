var otherFeatures=angular.module('otherFeaturedMovies',[]);
otherFeatures.controller('otherMoviesController',['$scope','dashboardService',function($scope,dashboardService){
    var allMoviesPromise = dashboardService.getAllMovies();
    allMoviesPromise.then(function(movies){
        $scope.latestMovies=movies[0].data.results;
        $scope.popularMovies=movies[1].data.results;
        $scope.upcomingMovies=movies[2].data.results;
        $scope.topRatedMovies=movies[3].data.results;
    });
}]);