var loginModule = angular.module("loginModule", []);
loginModule.controller("loginController", function ($scope) {

    var Please = "Please Regiter";
    $scope.submitLogin=function(){
        console.log($scope.user);
    };

});