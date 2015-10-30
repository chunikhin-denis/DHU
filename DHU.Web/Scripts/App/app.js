
'use strict';

var application = angular.module('DHUapp', []);

application.controller('LandingPageController', LandingPageController);


var app = angular.module('alumniApp', ['ui.router', 'LocalStorageModule', 'app.controllers', 'bgf.paginateAnything']);

app.config(['$stateProvider', '$locationProvider', '$urlRouterProvider', '$urlMatcherFactoryProvider',
    function ($stateProvider, $locationProvider, $urlRouterProvider, $urlMatcherFactory) {

        $urlMatcherFactory.caseInsensitive(true);

        $stateProvider
            .state('home', {
                url: '/',
                templateUrl: '/Angular/View/Home',
                controller: 'dashboardController'
            })
            .state('Profile', {
                url: '/Profile',
                templateUrl: '/Angular/View/Profile',
                controller: 'alumniController'
            })
            .state('otherwise', {
                url: '/error',
                templateUrl: '/Angular/View/Errors/Error404',
                controller: 'errorController'
            })
            .state('other', {
                url: '*path',
                templateUrl: '/Angular/View/Errors/Error404',
                controller: 'errorController'
            });

        $locationProvider.html5Mode({
            enabled: true,
            requireBase: false
        });

    }])

.run(['$http', '$templateCache', '$rootScope', '$state', '$stateParams', '$location', '$q', 'localStorageService',
    function ($http, $templateCache, $rootScope, $state, $stateParams, $location, $q, localStorageService) {
        var baseUrl = $location.protocol() + '://' + $location.host() + '/';
        var tokenExpires = localStorageService.cookie.get('expires');

        if (tokenExpires != null)
        {
            var expDate = new Date(tokenExpires);
            var today = new Date();
            expDate.setDate(expDate.getDate() - 1);
            if (expDate.getDate() == today.getDate() && expDate.getMonth() == today.getMonth())
                
                $http.get(baseUrl + 'api/Account/RefreshToken')
                    .success(function (data, status, headers, config) {
                        localStorageService.cookie.remove('expires');
                        localStorageService.cookie.set('expires', Date.now() + 14 * 24 * 60 * 60000);
                    })
                    .error(function (data, status, headers, config) {
                        $rootScope.logOut();
                    });
        }

        //region Layout information
        (function () {
            $rootScope.getLayoutInfo = function () {
                $http.get(baseUrl + 'api/Information/GetLayoutInfo')
                    .success(function (data, status, headers, config) {
                        $rootScope.university = data;
                        if (!data.IsUserApproved) {
                            //init dialogs
                            $('.not-link span').click(function (e) {
                                $('#notApprovedDialog').removeClass('hide').dialog({
                                    open: function () {
                                        if ($('.ui-dialog-titlebar-close i').length == 0)
                                            $('.ui-dialog-titlebar-close').append('<i type="button" class="ui-dialog-titlebar-close fa fa-times fa-lg p-l-10 p-t-4"></i>')
                                    },
                                    close: function () {
                                        $('.ui-dialog').remove();
                                        $('#notApprovedDialog').hide();
                                    }
                                });
                                $('.ui-dialog').css('left', $(e.target).offset().left + 150 + 'px');
                                $('.ui-dialog').css('top', $(e.target).offset().top - 80 + 'px');
                            });
                        }

                    })
                    .error(function (data, status, headers, config) {

                    });
            };
            $rootScope.getLayoutInfo();

            $http.get(baseUrl + 'api/Account/GetLocalization')
                .success(function (data, status, headers, config) {
                    $rootScope.locale = data;
                    localStorageService.cookie.set('locale', data);
                })
                .error(function (data, status, headers, config) {
                    $rootScope.locale = 'en-US';
                    localStorageService.cookie.set('locale', 'en-US');
                });

            $rootScope.customizing = { Background: '#ededed' };
            $http.get(baseUrl + 'api/Information/GetUniversityTheme')
            .success(function (data, status, headers, config) {
                $rootScope.customizing = data;
            });

        })();
        //endregion

        $rootScope.logOut = function () {
            $http.post(baseUrl + 'api/Account/Logout').then(function () {
                $http.get(baseUrl + 'LogOut');
                localStorageService.cookie.remove('access_token');
                localStorageService.cookie.remove('token_type');
                localStorageService.cookie.remove('subdomain');
                localStorageService.cookie.remove('redirect');
                localStorageService.cookie.remove('expires');
                window.location.href = '/SignIn';
            });
        };

        $rootScope.windowWidth = window.innerWidth;
        $rootScope.windowHeight = window.innerHeight;

        $rootScope.hasHandlerForJob = false;
        $rootScope.hasHandlerForAlumni = false;

        //authService.fillAuthData();

        // <ui-view> contains a pre-rendered template for the current view
        // caching it will prevent a round-trip to a server at the first page load

        var view = angular.element('#ui-view');
        $templateCache.put(view.data('tmpl-url'), view.html());

        // Allows to retrieve UI Router state information from inside templates
        $rootScope.$state = $state;
        $rootScope.$stateParams = $stateParams;

        $rootScope.$on('$stateChangeSuccess', function (event, toState, toParams, fromState, fromParams) {
            // Sets the layout name, which can be used to display different layouts (header, footer etc.)
            // based on which page the user is located
            $rootScope.layout = toState.layout;
            $('.sidebar ul.nav li').removeClass('active');

            if ($("#notApprovedDialog").hasClass('ui-dialog-content'))
                $('#notApprovedDialog').dialog('destroy');
        });

    }]);