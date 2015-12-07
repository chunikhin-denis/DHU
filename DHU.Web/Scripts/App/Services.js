'use strict';

angular.module('app.services', ['ui.router', 'LocalStorageModule', 'app.controllers'])

    .factory('helpers', ['$rootScope', '$location', function ($rootScope, $location) {
        var serviceFactory = {};
        var serviceBase = $location.protocol() + '://' + $location.host() + '/';
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

        var setSnivelPosition = function (index) {
            var contWidth = $('.container').width();
            var margin = -2000 + (contWidth * 0.16666 * (index + 0.5));
            $('.snivel').css('margin-left', margin);
        }

        var getProducts = function (opts, callback) {
            return $http.get(serviceBase + 'api/GetProducts', JSON.stringify(opts)).success(function (response) {
                callback(response);
            }).error(function (response) {
                if (response.status !== 200) {
                    callback(null);
                }
            });
        }

        serviceFactory.setSnivelPosition = setSnivelPosition;
        serviceFactory.getProducts = getProducts;
        serviceFactory.emptyOpts = emptyOpts;

        return serviceFactory;
    }])
;