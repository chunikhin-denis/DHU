'use strict';

angular.module('app.services', ['ui.router', 'LocalStorageModule', 'app.controllers'])

    .factory('helpers', ['$http', '$rootScope', '$location', function ($http, $rootScope, $location) {
        var serviceFactory = {};
        var serviceBase = $location.$$url.length > 1 ? $location.$$absUrl.replace($location.$$url, '') + '/' : $location.$$absUrl;

        serviceFactory.hasOptsSnapshot = false;

        var opts = {
            Brand: '',
            Categories: {},
            Search: '',
            Take: 10,
            Skip: 0,
            SortType: 'abc',
            IsInTop: false,
            IsInStock: false
        };

        var emptyOpts = opts;

        //function setOptsSnapshot(model) {
        //    sessionStorage.opts = angular.toJson(model);
        //    serviceFactory.hasOptsSnapshot = true;
        //}

        //function getOptsSnapshot(){
        //    return angular.fromJson(sessionStorage.opts);
        //}

        var setSnivelPosition = function (index) {
            var contWidth = $('.container').width();
            var margin = -2000 + (contWidth * 0.16666 * (index + 0.5));
            $('.snivel').css('margin-left', margin);
        }

        var initToolbox = function () {

            //searching
            $('#doSearch').on('click', function (e) {
                var text = $('#search').val();
                if (text.length >= 2) {
                    //do search
                    //var opts = serviceFactory.getOptsSnapshot();
                    $rootScope.opts.Search = text;
                    $rootScope.opts.Skip = 0;
                    //serviceFactory.setOptsSnapshot(opts);
                    serviceFactory.getProducts($rootScope.opts, function (response) {
                        $rootScope.products = response.Products;
                        $rootScope.page = 0;
                        $rootScope.pagesCount = response.SummaryCount % $rootScope.opts.Take == 0 ? Math.round(response.SummaryCount / $rootScope.opts.Take) : Math.floor(response.SummaryCount / $rootScope.opts.Take) + 1;
                    });
                }
                else {
                    $('#search').addClass('error');
                    toastr.error('Введите больше двух символов')
                    setTimeout(function () {
                        $('#search').removeClass('error');
                    }, 2000);
                }
            })

            //sorting
            $('select#sort').on('change', function (e) {
                //var opts = serviceFactory.getOptsSnapshot();
                $rootScope.opts.SortType = $('select#sort').val();
                $rootScope.opts.Skip = 0;
                //serviceFactory.setOptsSnapshot(opts);
                serviceFactory.getProducts($rootScope.opts, function (response) {
                    $rootScope.products = response.Products;
                    $rootScope.page = 0;
                    $rootScope.pagesCount = response.SummaryCount % $rootScope.opts.Take == 0 ? Math.round(response.SummaryCount / $rootScope.opts.Take) : Math.floor(response.SummaryCount / $rootScope.opts.Take) + 1;
                });
            })

            //change view mode
            $('.viewMode img').on('click', function (e) {
                var $img = $(e.target);
                $('.viewMode img').toggle();
                $rootScope.viewMode = $img.parent().prop('id').replace('#', '');
            })
        }


        var getProducts = function (opts, callback) {
            return $http.post(serviceBase + 'api/Data/GetProducts', JSON.stringify(opts)).success(function (response) {
                callback(response);
            }).error(function (response) {
                if (response.status !== 200) {
                    toastr.error(response.message);
                }
            });
        }

        serviceFactory.setSnivelPosition = setSnivelPosition;
        //serviceFactory.setOptsSnapshot = setOptsSnapshot;
        //serviceFactory.getOptsSnapshot = getOptsSnapshot;
        serviceFactory.getProducts = getProducts;
        serviceFactory.emptyOpts = emptyOpts;
        serviceFactory.initToolbox = initToolbox;

        return serviceFactory;
    }])
;