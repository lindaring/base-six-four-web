var app = angular.module('base64App', ['ngRoute']);

app.config(function ($routeProvider, $locationProvider) {
    $routeProvider.when('/', {templateUrl: 'partials/base64.html'});
    $routeProvider.when('/home', {templateUrl: 'partials/home.html'});
    $routeProvider.when('/guess-word', {templateUrl: 'partials/guess-word.html'});
    $routeProvider.otherwise({redirectTo: '/error-404'});
});

app.constant('HOST', 'http://localhost:8080');
app.constant('BASE64_ENDPOINT', '/base-six-four/v1/base64');

function _(element) {
    return document.getElementById(element);
}