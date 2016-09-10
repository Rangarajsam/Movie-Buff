var regModule = angular.module("registrationModule", []);
regModule.controller("regController", ['$scope','$location',function ($scope,$location) {

    $scope.invite = "Please Regiter";
    $scope.userList=[];
    $scope.submitRegister=function(){
      $scope.userList.push({name:$scope.user.name,email:$scope.user.email,userName:$scope.user.userName,password:$scope.user.password});
      var userListForStorage=JSON.stringify($scope.userList);
      localStorage.setItem("userList",userListForStorage);
        console.log(userListForStorage);
        console.log($scope.userList);
    };
    $scope.hideMenu=function(view){
        return view === $location.path();
    };

}]);
