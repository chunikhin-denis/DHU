﻿
'use strict';

var app = angular.module('DHUapp', ['ui.router', 'app.controllers', 'ngRoute']);

app.config(['$routeProvider',
    function ($routeProvider) {
        $routeProvider
            .when('/Top', {
                templateUrl: 'Product/Top',
                controller: 'TopController'
            })
            .when('/Molykote', {
                templateUrl: 'Product/Molykote',
                controller: 'MolykoteController'
            })
            .when('/DowCorning', {
                templateUrl: 'Product/DowCorning',
                controller: 'DCController'
            })
            .when('/Permabond', {
                templateUrl: 'Product/Permabond',
                controller: 'PermabondController'
            })
            .when('/Products', {
                templateUrl: 'Product/Products',
                controller: 'ProductsController'
            })
            .when('/PaymentShipping', {
                templateUrl: 'Product/PaymentShipping',
                controller: 'PaymentController'
            })
            .otherwise({
                redirectTo: '/Top'
            });
    }])

.run(['$rootScope', 'helpers',
function ($rootScope, helpers) {
    $rootScope.windowWidth = window.innerWidth;
    $rootScope.windowHeight = window.innerHeight;

    setTimeout(function () {
        $rootScope.$apply();
    }, 200)
}]);

