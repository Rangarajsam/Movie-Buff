dashboardModule.service("dashboardService", ['$http', '$q','$routeParams', function ($http, $q, $routeParams) {

    this.dashboard = "Dashboard";
    var API_KEY = "a01bef691df88befc1d2c4224ad12d93";
    var latestMovies = $http.get("http://api.themoviedb.org/3/movie/now_playing?api_key=" + API_KEY);
    var popularMovies = $http.get("http://api.themoviedb.org/3/movie/popular?api_key=" + API_KEY);
    var upcomingMovies = $http.get("http://api.themoviedb.org/3/movie/upcoming?api_key=" + API_KEY);
    var topRatedMovies = $http.get("http://api.themoviedb.org/3/movie/top_rated?api_key=" + API_KEY);
    this.getAllMovies = function () {
        var deferred = $q.defer();
        $q.all([latestMovies, popularMovies, upcomingMovies, topRatedMovies])
            .then(function (data) {
                deferred.resolve(data);
            }, function (error) {
                deferred.reject(error);
            });
        return deferred.promise;
    };
    this.getSearchMovies = function (searchTxt) {
        var deferred = $q.defer();
        $http.get("http://api.themoviedb.org/3/search/movie?api_key=" + API_KEY + "&query=" + searchTxt)
            .then(function (res) {
                    deferred.resolve(res);
                },
                function (err) {
                    deferred.reject(err);
                });
        return deferred.promise;
    };
}]);