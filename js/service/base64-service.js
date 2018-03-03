app.factory('base64Service', function ($http, HOST, BASE64_ENDPOINT) {

    return {
        encode: function (string, charset) {
            var promise = $http({
                method: 'GET',
                url: HOST + BASE64_ENDPOINT + '/encode/' + string + '?charset=' + charset
            });
            return promise;
        },
        decode: function (string, charset) {
            var promise = $http({
                method: 'GET',
                url: HOST + BASE64_ENDPOINT + '/decode/' + string + '?charset=' + charset
            });
            return promise;
        },
        getCharsetList: function () {
            var promise = $http({
                method: 'GET',
                url: HOST + BASE64_ENDPOINT + '/charset/list'
            });
            return promise;
        }
    };

});