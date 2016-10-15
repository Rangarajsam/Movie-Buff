var movieBuff=angular.module("movieBuff",['ngRoute','commonModule','registrationModule','loginModule','dashboardModule','otherFeaturedMovies','detailsModule']);

movieBuff.config(["$routeProvider",function($routeProvider){
    $routeProvider
    .when("/dashboard",{
        templateUrl:"./dashboard/views/html/dashboard.html",
        controller:"dashboardController"
    })
    .when("/nowPlaying",{
        templateUrl:"./otherPages/views/now-playing.html",
        controller:"otherMoviesController"
    })
    .when("/popular",{
        templateUrl:"./otherPages/views/popular.html",
        controller:"otherMoviesController"
    })
    .when("/upcoming",{
        templateUrl:"./otherPages/views/upcoming.html",
        controller:"otherMoviesController"
    })
    .when("/topRated",{
        templateUrl:"./otherPages/views/top-rated.html",
        controller:"otherMoviesController"
    })
    .when("/:movieId",{
        templateUrl:"./details/views/details.html",
        controller:"DetailsController"
    })
    .when("/movies/:movieName",{
        templateUrl:"./common/views/search-result.html",
        controller:"CommonController"
    })
    .otherwise({
        redirectTo:"/dashboard"
    })

}]);
