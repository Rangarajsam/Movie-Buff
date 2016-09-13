angular.module('detailsModule').service('detailsService', function ($q, $http) {

    var API_KEY = "a01bef691df88befc1d2c4224ad12d93";
    var deferred = $q.defer();
    this.getDetails = function (movieId) {
        $http.get("http://api.themoviedb.org/3/movie/" + movieId + "?api_key=" + API_KEY)
        .then(function (response) {
                deferred.resolve(response);
            },
            function (err) {
                deferred.reject(err);
            });
        return deferred.promise;
    }
});