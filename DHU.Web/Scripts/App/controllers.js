'use strict';

//angular.module('application.controllers', ['ui.router', 'LocalStorageModule', 'app.services', 'angularFileUpload', 'ngSanitize'])

//    /// Controllers

//    .controller('LandingPageController', ['$scope', '$rootScope', '$location', '$timeout', 'content',
//    function ($scope, $rootScope, $location, $timeout, content) {
//        // authService
//        // if user is logged redirect to profile page
//        debugger;

//    }])
//;


var LandingPageController = function ($scope) {
    $scope.models = {
        helloAngular: 'I work!'
    };
}
