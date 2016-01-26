'use strict';

angular.module('app.controllers', ['app.services'])
    /// Controllers

    .controller('TopController', ['$scope', '$rootScope','helpers',
    function ($scope, $rootScope, helpers) {

        if ($rootScope.opts == undefined) {
            $rootScope.opts = helpers.emptyOpts;
           //helpers.setOptsSnapshot($scope.opts);
            
            //init toolbox
            helpers.initToolbox();
        }

        $rootScope.pager = new Array(12, 24, 36);
        $rootScope.opts.Take = $rootScope.opts.Take != null ? ($rootScope.pager.indexOf($rootScope.opts.Take) > -1 ? $rootScope.opts.Take : $rootScope.pager[0]) : $rootScope.pager[0];
        $rootScope.opts.IsInTop = true;
        $rootScope.opts.Brand = '';
        $rootScope.opts.Search = '';
        $('#search').val('');

        //helpers.setOptsSnapshot($scope.opts);
        helpers.getProducts($rootScope.opts, function (response) {
            $rootScope.products = response.Products;
            $rootScope.pagesCount = response.SummaryCount % $rootScope.opts.Take == 0 ? Math.round(response.SummaryCount / $rootScope.opts.Take) : Math.floor(response.SummaryCount / $rootScope.opts.Take) + 1;
        });

        //pagination
        $rootScope.page = 0;
        $rootScope.opts.Take = $rootScope.opts.Take;
        $rootScope.pagesCount = 0;
        $scope.getNumber = function (num) {
            return new Array(num);
        }

        $scope.gotoPage = function (newPage) {
            if (newPage < 0 || newPage == $rootScope.pagesCount) {
                return false;
            }

            $rootScope.page = newPage;
            $rootScope.opts.Skip = newPage * $rootScope.opts.Take;

            helpers.getProducts($rootScope.opts, function (response) {
                $rootScope.products = response.Products;
                $rootScope.pagesCount = response.SummaryCount % $rootScope.opts.Take == 0 ? Math.round(response.SummaryCount / $rootScope.opts.Take) : Math.floor(response.SummaryCount / $rootScope.opts.Take) + 1;
            });
        }

        $scope.$on('$viewContentLoaded', function () {
            $('ul.navbar-nav li').removeClass('active');
            $('ul.navbar-nav li:eq(0)').addClass('active');
            helpers.setSnivelPosition(-3);
        });
    }])

    .controller('DetailsController', ['$scope', '$rootScope', 'helpers',
    function ($scope, $rootScope, helpers) {
        debugger;
    }])

.controller('MolykoteController', ['$scope', '$rootScope', 'helpers',
    function ($scope, $rootScope, helpers) {
        $rootScope.pager = new Array(10, 20, 50);
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
