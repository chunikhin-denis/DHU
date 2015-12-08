'use strict';

angular.module('app.services', ['ui.router', 'LocalStorageModule', 'app.controllers'])

    .factory('helpers', ['$rootScope', '$location', function ($rootScope, $location) {
        var serviceFactory = {};
        var serviceBase = $location.protocol() + '://' + $location.host() + '/';

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
        serviceFactory.setOptsSnapshot = setOptsSnapshot;
        serviceFactory.getOptsSnapshot = getOptsSnapshot;
        serviceFactory.getProducts = getProducts;
        serviceFactory.emptyOpts = emptyOpts;
        serviceFactory.initToolbox = initToolbox;

        return serviceFactory;
    }])
;