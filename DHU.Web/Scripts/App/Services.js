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

        function setOptsSnapshot(model) {
            sessionStorage.opts = angular.toJson(model);
            serviceFactory.hasOptsSnapshot = true;
        }

        function getOptsSnapshot(){
            return angular.fromJson(sessionStorage.opts);
        }

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
                    var opts = serviceFactory.getOptsSnapshot();
                    opts.Search = text;
                    serviceFactory.setOptsSnapshot(opts);
                    serviceFactory.getProducts(opts);
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
                var opts = serviceFactory.getOptsSnapshot();
                opts.SortType = $('select#sort').val();
                serviceFactory.setOptsSnapshot(opts);
                serviceFactory.getProducts(opts);
            })

            //change view mode
            $('.viewMode img').on('click', function (e) {
                var $img = $(e.target);
                $('.viewMode img').toggle();
                $rootScope.viewMode = $img.parent().prop('id').replace('#', '');
            })
        }


        var getProducts = function (opts) {
            return $http.post(serviceBase + 'api/Data/GetProducts', JSON.stringify(opts)).success(function (response) {
                $rootScope.products = response;
                debugger;
            }).error(function (response) {
                if (response.status !== 200) {
                    toastr.error(response.message);
                }
            });
        }

        serviceFactory.setSnivelPosition = setSnivelPosition;
        serviceFactory.setOptsSnapshot = setOptsSnapshot;
        serviceFactory.getOptsSnapshot = getOptsSnapshot;
        serviceFactory.getProducts = getProducts;
        serviceFactory.emptyOpts = emptyOpts;
        serviceFactory.initToolbox = initToolbox;

        return serviceFactory;
    }])
;