var movieBuff=angular.module("movieBuff",['ngRoute','commonModule','registrationModule','loginModule','dashboardModule','otherFeaturedMovies']);

movieBuff.config(["$routeProvider",function($routeProvider){
    $routeProvider
    .when("/register",{
        templateUrl:"./register/views/html/register.html",
        controller:"regController"
    })
    .when("/login",{
        templateUrl:"./login/views/html/login.html",
        controller:"loginController"
    })
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
    .otherwise({
        redirectTo:"/login"
    })

}]);
