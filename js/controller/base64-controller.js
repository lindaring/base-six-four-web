app.controller('base64Controller', function ($scope, $location, base64Service) {

    $scope.charsetList = [];
    $scope.selectedCharset = [];
    $scope.stringToProcess = "";
    $scope.processedString = {
        key: "",
        value: ""
    };
    $scope.selectedCharset = "";

    $scope.encodeBase64 = function () {
        $scope.encodePromise = base64Service.encode($scope.stringToProcess, $scope.selectedCharset);
        $scope.encodePromise.then(function success(response) {
            $scope.processedString = response.data;
        }).catch(function () {
            console.log("Base 64 controller :: Failed to encode string.");
        });
    };

    $scope.decodeBase64 = function () {
        $scope.decodePromise = base64Service.decode($scope.stringToProcess, $scope.selectedCharset);
        $scope.decodePromise.then(function success(response) {
            $scope.processedString = response.data;
        }).catch(function () {
            console.log("Base 64 controller :: Failed to decode string.");
        });
    };

    $scope.getCharsetList = function () {
        $scope.charsetListPromise = base64Service.getCharsetList();
        $scope.charsetListPromise.then(function success(response) {
            $scope.charsetList = response.data;
            $scope.selectedCharset = response.data[0];
        }).catch(function () {
            console.log("Base 64 controller :: Failed to retrieve charset list.");
        });
    };

    $scope.refresh = function () {
        $scope.getCharsetList();
    };

    $scope.refresh();

});