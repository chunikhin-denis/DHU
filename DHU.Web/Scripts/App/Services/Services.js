'use strict';

angular.module('app.services', ['ui.router', 'LocalStorageModule', 'app.controllers'])

    .factory('helpers', ['$rootScope', function ($rootScope) {
        var serviceFactory = {};

        var setSnivelPosition = function (index) {
            var contWidth = $('.container').width();
            var margin = -2000 + (contWidth * 0.16666 * (index + 0.5));
            $('.snivel').css('margin-left', margin);
        }

        serviceFactory.setSnivelPosition = setSnivelPosition;

        return serviceFactory;
    }])
;