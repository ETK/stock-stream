var app = angular.module("StockStreamApp", ["ngResource", "ngRoute"]);

app.config(function($locationProvider, $routeProvider) {

    $routeProvider
    .when("/", {
        controller: "MainController",
        templateUrl: "/views/main.html"
    })
    .otherwise({
       redirectTo: "/"
    });
});