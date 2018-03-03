var app = angular.module('base64App', ['ngRoute']);

app.config(function ($routeProvider, $locationProvider) {
    $routeProvider.when('/', {templateUrl: 'partials/base64-encode.html'});
    $routeProvider.when('/base64/encode', {templateUrl: 'partials/base64-encode.html'});
    $routeProvider.when('/base64/decode', {templateUrl: 'partials/base64-decode.html'});
    $routeProvider.otherwise({redirectTo: '/error-404'});
});

app.constant('HOST', 'http://localhost:8080');
app.constant('BASE64_ENDPOINT', '/base-six-four/v1/base64');
app.constant('GENERAL_ENDPOINT', '/base-six-four/v1/general');

function _(element) {
    return document.getElementById(element);
}