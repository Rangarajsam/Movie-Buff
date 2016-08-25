var loginModule = angular.module("loginModule", []);
loginModule.controller("loginController", function($scope, $location) {
    $scope.wrongCredential = false;
    $scope.submitLogin = function() {
        var userList = localStorage.getItem('userList');
        var userObject;
        console.log(userList);
        userList = JSON.parse(userList);
        userList.forEach(function(elem, index, arr) {
            if ($scope.user && elem.email === $scope.user.email) {
                console.log("email available");
                userObject = elem;
            }
        });
        if (userObject) {
            if (userObject.password === $scope.user.password) {
                $location.path("/dashboard");
            }
            else {
                $scope.wrongCredential = true;
            }
        } else {
            $scope.wrongCredential = true;
        }
    };

});
