﻿'use strict';

angular.module('app.controllers', ['app.services'])
    /// Controllers

    .controller('TopController', ['$scope', '$rootScope','helpers',
    function ($scope, $rootScope, helpers) {

        if (helpers.hasOptsSnapshot) {
            // Restore
            $scope.opts = helpers.getOptsSnapshot("opts");
        }
        else {
            $scope.opts = helpers.emptyOpts;
            helpers.setOptsSnapshot($scope.opts);
            
            //init toolbox
            helpers.initToolbox();
        }

        $scope.opts.IsInTop = true;
        $scope.opts.Brand = '';
        $scope.opts.Search = '';
        $('#search').val('');

        helpers.setOptsSnapshot($scope.opts);
        helpers.getProducts($scope.opts);
        //$scope.$watch('opts', function () {
        //    helpers.setOptsSnapshot($scope.opts);
        //    helpers.getProducts($scope.opts);

        //    //reload data
        //});

        $scope.$on('$viewContentLoaded', function () {
            $('ul.navbar-nav li').removeClass('active');
            $('ul.navbar-nav li:eq(0)').addClass('active');
            helpers.setSnivelPosition(-3);
        });
    }])

.controller('MolykoteController', ['$scope', '$rootScope', 'helpers',
    function ($scope, $rootScope, helpers) {
        $scope.models = {
            helloAngular: 'I work!'
        };

        $scope.$on('$viewContentLoaded', function () {
            $('ul.navbar-nav li').removeClass('active');
            $('ul.navbar-nav li:eq(1)').addClass('active');
            helpers.setSnivelPosition(-2);
        });
    }])

.controller('DCController', ['$scope', '$rootScope','helpers',
    function ($scope, $rootScope, helpers) {
        $scope.models = {
            helloAngular: 'I work!'
        };

        $scope.$on('$viewContentLoaded', function () {
            $('ul.navbar-nav li').removeClass('active');
            $('ul.navbar-nav li:eq(2)').addClass('active');
            helpers.setSnivelPosition(-1);
        });
    }])

.controller('PermabondController', ['$scope', '$rootScope','helpers',
    function ($scope, $rootScope, helpers) {
        $scope.models = {
            helloAngular: 'I work!'
        };

        $scope.$on('$viewContentLoaded', function () {
            $('ul.navbar-nav li').removeClass('active');
            $('ul.navbar-nav li:eq(3)').addClass('active');
            helpers.setSnivelPosition(0);
        });
    }])
.controller('ProductsController', ['$scope', '$rootScope','helpers',
    function ($scope, $rootScope, helpers) {
        $scope.models = {
            helloAngular: 'I work!'
        };

        $scope.$on('$viewContentLoaded', function () {
            $('ul.navbar-nav li').removeClass('active');
            $('ul.navbar-nav li:eq(4)').addClass('active');
            helpers.setSnivelPosition(1);
        });
    }])

.controller('PaymentController', ['$scope', '$rootScope','helpers',
    function ($scope, $rootScope, helpers) {
        $scope.models = {
            helloAngular: 'I work!'
        };

        $scope.$on('$viewContentLoaded', function () {
            $('ul.navbar-nav li').removeClass('active');
            $('ul.navbar-nav li:eq(5)').addClass('active');
            helpers.setSnivelPosition(2);
        });
    }]);
