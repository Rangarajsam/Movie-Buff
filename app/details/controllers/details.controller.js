angular.module('detailsModule', []);
angular.module('detailsModule')
    .controller('DetailsController', ['$scope', 'detailsService','$routeParams',function ($scope, detailsService,$routeParams) {
        var movieId=$routeParams.movieId;
        console.log(movieId);
        detailsService.getDetails(movieId).then(function (res) {
            console.log(res.data);
            $scope.details = res.data;
        });

}]);