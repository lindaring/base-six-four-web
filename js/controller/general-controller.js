app.controller('generalController', function ($scope, $location, generalService) {

    $scope.currentYear = "";

    $scope.getYear = function () {
        $scope.getYearPromise = generalService.getYear();
        $scope.getYearPromise.then(function success(response) {
            $scope.currentYear = response.data;
        }).catch(function () {
            console.log("Base 64 controller :: Failed to retrieve current year.");
        });
    };

    $scope.refresh = function () {
        $scope.getYear();
    };

    $scope.refresh();

});