var movieBuff=angular.module("movieBuff",['ngRoute','registrationModule','loginModule']);

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
    .otherwise({
        redirectTo:"/login"
    })
    
}]);