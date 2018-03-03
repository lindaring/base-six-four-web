app.factory('generalService', function ($http, HOST, GENERAL_ENDPOINT) {

    return {
        getYear: function () {
            var promise = $http({
                method: 'GET',
                url: HOST + GENERAL_ENDPOINT + '/year'
            });
            return promise;
        }
    };

});