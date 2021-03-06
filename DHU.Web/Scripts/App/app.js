﻿
'use strict';

var app = angular.module('DHUapp', ['ui.router', 'app.controllers', 'ngRoute']);

app.config(['$routeProvider', '$locationProvider',
    function ($routeProvider, $locationProvider) {
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
            .when("/Details/:id", {
                templateUrl: 'Product/Details',
                controller: 'DetailsController',
            })
            .otherwise({
                redirectTo: '/Top'
            });

        $locationProvider.html5Mode({
            enabled: true,
            requireBase: false
        });

    }])

.run(['$http', '$rootScope', '$location', 'helpers',
function ($http, $rootScope, $location, helpers) {
    $rootScope.windowWidth = window.innerWidth;
    $rootScope.windowHeight = window.innerHeight;
    $rootScope.products = {};
    $rootScope.Math = window.Math;
    //var today = new Date();
    //$rootScope.today = today.getDate() + '.' + today.getMonth() + today.getFullYear();

    var serviceBase = $location.$$url.length > 1 ? $location.$$absUrl.replace($location.$$url, '') + '/' : $location.$$absUrl;

    $rootScope.getCurrencyRates = function () {
        $http.get(serviceBase + 'api/Data/GetCurrencyRates')
            .success(function (data, status, headers, config) {
                if (data != null) {
                    $rootScope.rates = data;
                    $rootScope.eur = data['EUR'][1];
                    $rootScope.usd = data['USD'][1];
                }
            })
            .error(function (data, status, headers, config) {
                $rootScope.rates = null;
            });
    };

    $rootScope.changePerPage = function (item) {
        $('.onPage li').removeClass('active');
        $('.onPage li.' + item).addClass('active');
        //var opts = helpers.getOptsSnapshot();
        $rootScope.opts.Take = item;
        $rootScope.opts.Take = item;
        //helpers.setOptsSnapshot(opts);
        helpers.getProducts($rootScope.opts, function (response) {
            $rootScope.products = response.Products;
            $rootScope.pagesCount = response.SummaryCount % $rootScope.opts.Take == 0 ? Math.round(response.SummaryCount / $rootScope.opts.Take) : Math.floor(response.SummaryCount / $rootScope.opts.Take) + 1;
        });
    }

    $rootScope.getCurrencyRates();

}]);

