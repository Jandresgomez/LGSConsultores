var app = angular.module('myApp', []);
app.controller('indexCtrl', function($scope) {
    $scope.firstName= "John";
    $scope.lastName= "Doe";
});