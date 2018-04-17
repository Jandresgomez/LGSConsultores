var app = angular.module('myApp', ["ngRoute"]);
app.controller('indexCtrl', function($scope) {
});
app.config(function($routeProvider) {
    $routeProvider
    .when("/", {
        templateUrl : "/static/website/index/inicio.html"
    })
    .when("/registrarIncapacidad", {
        templateUrl : "/static/website/index/registrarIncapacidad.html"
    })
    .when("/verIncapacidades", {
        templateUrl : "/static/website/index/verIncapacidades.html"
    })
    .when("/analisis", {
        templateUrl : "/static/website/index/analisis.html"
    });
});