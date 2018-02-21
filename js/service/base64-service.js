app.factory('base64Service', function ($http, HOST, BASE64_ENDPOINT) {

    return {
        getRandomList: function (limit) {
            var promise = $http({
                method: 'GET',
                url: HOST + BASE64_ENDPOINT + '/random/' + limit
            });
            return promise;
        },
        getDefinition: function (wordId) {
            var promise = $http({
                method: 'GET',
                url: HOST + BASE64_ENDPOINT + '/' + wordId
            });
            return promise;
        }
    };

});