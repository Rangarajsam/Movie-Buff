angular.module('detailsModule', []);
angular.module('detailsModule')
    .controller('DetailsController', ['$scope', 'detailsService','$routeParams','$templateCache',function ($scope, detailsService,$routeParams,$templateCache) {
        var movieId=$routeParams.movieId;
        console.log(movieId);
        detailsService.getDetails()
        .then(function (res) {
            console.log(movieId);
            console.log(res.data);
            $scope.details = res.data;
        });

}]);