var regModule = angular.module("registrationModule", []);
regModule.controller("regController", function ($scope) {

    $scope.invite = "Please Regiter";
    $scope.submitRegister=function(){
        console.log($scope.user);
    }

});