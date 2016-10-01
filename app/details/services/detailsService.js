angular.module('detailsModule').service('detailsService', function ($q, $http, $routeParams) {

    var API_KEY = "a01bef691df88befc1d2c4224ad12d93";
   

    this.getDetails = function () {
         var movieId = $routeParams.movieId;
        var deferred = $q.defer();
        $http.get("http://api.themoviedb.org/3/movie/" + movieId + "?api_key=" + API_KEY)
            .then(function (response) {
                    deferred.resolve(response);
                },
                function (err) {
                    deferred.reject(err);
                });
        return deferred.promise;
    };
});