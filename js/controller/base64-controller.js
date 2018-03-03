app.controller('base64Controller', function ($scope, $location, base64Service) {

    $scope.charsetList = [];
    $scope.selectedCharset = [];
    $scope.stringToEncode = "";
    $scope.encodedString = {
        key: "",
        value: ""
    };
    $scope.selectedCharset = "";

    $scope.encodeBase64 = function () {
        $scope.encodePromise = base64Service.encode($scope.stringToEncode, $scope.selectedCharset);
        $scope.encodePromise.then(function success(response) {
            $scope.encodedString = response.data;
        }).catch(function (data) {
            console.log("Base 64 controller :: Failed to encode string.");
        });
    };

    $scope.getCharsetList = function () {
        $scope.charsetListPromise = base64Service.getCharsetList();
        $scope.charsetListPromise.then(function success(response) {
            $scope.charsetList = response.data;
            $scope.selectedCharset = response.data[0];
        }).catch(function () {
            console.log("Base 64 controller :: Failed to encode string.");
        });
    };

    $scope.refresh = function () {
        $scope.getCharsetList();
    };

    $scope.refresh();

});