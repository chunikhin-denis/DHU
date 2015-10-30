'use strict';

angular.module('app.services', ['ui.router', 'LocalStorageModule', 'app.controllers'])

    .factory('content', ['$rootScope', function ($rootScope) {
        var serviceFactory = {};

        var locale = $rootScope.locale;

        //if (locale == 'en-US')
        {
            serviceFactory = {
                pageTitles: {
                    home: 'Home - MyAlumnet',
                    profile: 'Alumni profile - MyAlumnet',
                    profileUpdate: 'Update profile - MyAlumnet',
                    profileSettings: 'Profile settings - MyAlumnet',
                    find: 'Find Alumni - MyAlumnet',
                    news: 'News - MyAlumnet',
                    events: 'Events - MyAlumnet',
                    jobs: 'Job board - MyAlumnet',
                    messages: 'My messages - MyAlumnet',
                    error: '404 Page Not Found - MyAlumnet'
                },
                errors: {
                    fillPrevious: 'Please fill previous field',
                    fillUniversity: 'Please fill University',
                    fillCollege: 'Please fill University College',
                    fillMajor: 'Please fill Major',
                    fillEducationPeriod: 'Please check Education Timeframe',
                    fillAchievements: 'Please fill Achievements',
                    fillCompany: 'Please fill Company',
                    fillPosition: 'Please fill Position',
                    fillIndustry: 'Please fill Industry',
                    fillJobPeriod: 'Please check Job Timeframe',
                    invalidEmail: 'Invalid Email',
                    noTweets: 'Tweets can not be loaded',
                    noFB: 'Facebook posts can not be loaded',
                    fillDeadline: 'Please enter valid Deadline Date',
                    fillJobType: 'Please select Job Type',
                    fillWebsite: 'Please fill Website link',
                    fillCountry: 'Please fill Country',
                    fillState: 'Please enter State',
                    fillCity: 'Please enter City',
                    fillRecipients: 'Please enter Recipients',
                    shortTopic: 'Topic must be less than 256 characters',
                    fillTopic: 'Please enter a topic',
                    fillMessage: 'You can not send empty message',
                    checkRecipients: 'Can not send message to selected alumni. Please verify recipients'
                },
                texts: {
                    noData: 'Not specified',
                    passwordChanged: 'Password has been changed',
                    changeEmail1: 'Please visit',
                    changeEmail2: 'to confirm new Email',
                    saved: 'Saved',
                    languageChanged: 'Language changed',
                    notFound: 'Not Found',
                    search: 'Search...',
                    savedInDrafts: 'Message has been saved in Drafts',
                    messageSent: 'Message has been sent successfully',
                    save: 'Save',
                    doNotsave: 'Do not save',
                    postJob: 'Job posting has been sent to admin for approval. Thank you.'
                }
            };
        }

        if (locale == 'ar-SA') {
            serviceFactory = {
                pageTitles: {
                    home: 'الصفحة الرئيسية - صفحتي على الموقع',
                    profile: 'الملف الشخصي للخريجين - صفحتي على الموقع',
                    profileUpdate: 'تحديث الملف الشخصي- صفحتي على الموقع',
                    profileSettings: 'إعدادات الملف الشخصي- صفحتي على الموقع',
                    find: 'إيجاد الخريجين- صفحتي على الموقع',
                    news: 'الأخبار- صفحتي على الموقع',
                    events: 'الأحداث- صفحتي على الموقع',
                    jobs: 'لوحة الوظائف - صفحتي على الموقع',
                    messages: 'رسائلي- صفحتي على الموقع',
                    error: 'لم يتم العثور على الصفحة 404 - صفحتي على الموقع'
                },
                errors: {
                    fillPrevious: 'المرجو ملء الخانة السابقة',
                    fillUniversity: 'المرجو ملء خانة "الجامعة',
                    fillCollege: 'المرجو ملء "الكلية الجامعية"',
                    fillMajor: 'المرجو ملء خانة "التخصّص"',
                    fillEducationPeriod: 'الرجاء التحقق من الإطار الزمني الخاص بالتعليم ',
                    fillAchievements: 'المرجو ملء خانة "الإنجازات"',
                    fillCompany: 'المرجو ملء خانة "الشركة"',
                    fillPosition:'المرجو ملء خانة "المَنصِب"',
                    fillIndustry: 'المرجو ملء خانة "المجال"',
                    fillJobPeriod: 'الرجاء التحقق من الإطار الزمني الخاص بالوظيفة',
                    invalidEmail: 'بريد إلكتروني خاطئ',
                    noTweets: 'لا يمكن تحميل التغريدات',
                    noFB: 'المشاركات الفيسبوك لا يمكن تحميل',
                    fillDeadline: 'الرجاء إدخال الموعد النهائي السليم',
                    fillJobType: 'الرجاء تحديد نوع العمل',
                    fillWebsite: 'الرجاء إدخال رابط موقع',
                    fillCountry: 'الرجاء إدخال البلد',
                    fillState: 'الرجاء إدخال الولاية',
                    fillCity: 'الرجاء إدخال المدينة',
                    fillRecipients: 'الرجاء إدخال المُستفيدين',
                    shortTopic: 'الموضوع يجب أن يكون أقل من 256 حرفاً',
                    fillTopic: 'الرجاء إدخال الموضوع',
                    fillMessage: 'لا يمكنك إرسال رسالة فارغة',
                    checkRecipients: 'لا يمكن إرسال رسالة إلى الخريجين المُختارين. الرجاء التحقق من المستفيدين'
                },
                texts: {
                    noData: 'غير محدد',
                    passwordChanged: 'تمَّ تغيير كلمة المرور',
                    changeEmail1: 'يرجى زيارة',
                    changeEmail2: 'لتأكيد جديد البريد الإلكتروني',
                    saved: 'حفظ',
                    languageChanged: 'تغيرت اللغة',
                    notFound: 'لم يتم العثور على',
                    search: 'بحث ...',
                    savedInDrafts: 'الرسالة قد تم حفظها في المسودات',
                    messageSent: 'تمَّ إرسال الرسالة بنجاح',
                    save: 'حفظ',
                    doNotsave: 'لا تحفظ',
                    postJob: 'وقد أرسلت عرضا للعمل إلى مسؤول عن الموافقة وسوف تكون متاحة قريبا'
                }
            };
        }

        return serviceFactory;
    }])

    .factory('stateService', ['$rootScope',
        function ($rootScope) {

            var serviceFactory = {};

            serviceFactory.hasSnapshotForJob = false;
            serviceFactory.hasSnapshotForAlumni = false;
            serviceFactory.hasSnapshotForNews = false;
            serviceFactory.hasSnapshotForEvents = false;

            function setSnapshotForSearchAlumniModel(model) {
                sessionStorage.searchAlumniModel = angular.toJson(model);
                serviceFactory.hasSnapshotForAlumni = true;
            }

            function getSnapshotForSearchAlumniModel() {
                return angular.fromJson(sessionStorage.searchAlumniModel);
            }

            function clearSnapshotForSearchAlumniModel() {
                sessionStorage.searchAlumniModel = null;
                serviceFactory.hasSnapshotForAlumni = false;
            }

            function setSnapshotForSearchJobModel(model) {
                sessionStorage.searchJobModel = angular.toJson(model);
                serviceFactory.hasSnapshotForJob = true;
            }

            function getSnapshotForSearchJobModel() {
                return angular.fromJson(sessionStorage.searchJobModel);
            }

            function clearSnapshotForSearchJobModel() {
                sessionStorage.searchJobModel = null;
                serviceFactory.hasSnapshotForJob = false;
            }

            function setSnapshotByKey(key, data) {
                if (angular.isUndefined(key)) {
                    throw new "key is undefined";
                }

                sessionStorage[key] = data;
            }

            function getSnapshotByKey(key) {
                if (angular.isUndefined(key)) {
                    throw new "key is undefined";
                }

                if (sessionStorage.hasOwnProperty(key)) {
                    return sessionStorage[key];
                } else {
                    return null;
                }
            }

            function hasSnapshotByKey(key) {
                if (angular.isUndefined(key)) {
                    throw new "key is undefined";
                }

                return sessionStorage.hasOwnProperty(key);
            }

            function clearSnapshotByKey(key) {
                if (angular.isUndefined(key)) {
                    throw new "key is undefined";
                }

                //for (var prop in sessionStorage) { }
                if (sessionStorage.hasOwnProperty(key)) {
                    sessionStorage[key] = null;
                }
            }

            function clearAllSnapshots() {
                for (var prop in sessionStorage) {
                    if (prop !== 'length') {
                        sessionStorage[prop] = null;
                    }
                }
            }

            serviceFactory.setSnapshotForSearchAlumniModel = setSnapshotForSearchAlumniModel;
            serviceFactory.getSnapshotForSearchAlumniModel = getSnapshotForSearchAlumniModel;
            serviceFactory.clearSnapshotForSearchAlumniModel = clearSnapshotForSearchAlumniModel;
            serviceFactory.setSnapshotForSearchJobModel = setSnapshotForSearchJobModel;
            serviceFactory.getSnapshotForSearchJobModel = getSnapshotForSearchJobModel;
            serviceFactory.clearSnapshotForSearchJobModel = clearSnapshotForSearchJobModel;

            serviceFactory.setSnapshotByKey = setSnapshotByKey;
            serviceFactory.getSnapshotByKey = getSnapshotByKey;
            serviceFactory.hasSnapshotByKey = hasSnapshotByKey;
            serviceFactory.clearSnapshotByKey = clearSnapshotByKey;
            serviceFactory.clearAllSnapshots = clearAllSnapshots;

            $rootScope.$on('saveSnapshotForSearchAlumniModel', serviceFactory.setSnapshotForSearchAlumniModel);
            $rootScope.$on('restoreSnapshotForSearchAlumniModel', serviceFactory.getSnapshotForSearchAlumniModel);
            $rootScope.$on('saveSnapshotForSearchJobModel', serviceFactory.setSnapshotForSearchJobModel);
            $rootScope.$on('restoreSnapshotForSearchJobModel', serviceFactory.getSnapshotForSearchJobModel);

            return serviceFactory;
        }])

    .factory('alumniService', ['$http', '$q', 'localStorageService', '$location',
        function ($http, $q, localStorageService, $location) {

            var serviceBase = $location.protocol() + '://' + $location.host() + '/';
            var serviceFactory = {};
            var model = {
                isMentor: false,
                isMentees: false,
                location: '',
                universityLevels: [],
                helpTypes: [],
                industries: [],
                languages: [],
                keywords: '',
                skip: '',
                take: ''
            };

            serviceFactory.searchRequestModel = model;

            var reallocModelInstance = function () {
                serviceFactory.searchRequestModel = {
                    isMentor: false,
                    isMentees: false,
                    location: '',
                    universityLevels: [],
                    helpTypes: [],
                    industries: [],
                    languages: [],
                    keywords: '',
                    skip: '',
                    take: ''
                };
            }

            var getProfile = function (id, callback) {
                var url = id == null ? serviceBase + 'api/Alumni/GetProfile' : serviceBase + 'api/Alumni/GetProfile/' + id;

                $http.get(url).success(function (response) {
                    callback(response);
                }).error(function (response) {
                    callback(null);
                });
            }

            var getProfileForUpdate = function (callback) {
                return $http.get(serviceBase + 'api/Alumni/GetProfileInfoForUpdate').then(function (response) {
                    callback(response.data);
                });
            }

            var searchProfiles = function (model, callback) {
                return $http.post(serviceBase + 'api/Search/GetProfiles', model).then(function (response) {
                    callback(response.data);
                });
            }

            var updateProfile = function (model, callback) {
                return $http.post(serviceBase + 'api/Alumni/UpdateProfile', model).then(function (response) {
                    callback(response.data);
                });
            }

            var getFilters = function (callback) {
                return $http.get(serviceBase + 'api/Search/GetFilters').then(function (response) {
                    callback(response.data);
                });
            }

            var getLastNews = function (skip, take, callback) {
                return $http.get(serviceBase + 'api/News/GetNews', { skip: skip, take: take }).then(function (response) {
                    callback(response.data);
                });
            }

            var getNewsOverview = function (newsId, callback) {
                return $http.get(serviceBase + 'api/News/GetFullNewsById/' + newsId).success(function (response) {
                    callback(response);
                }).error(function (response) {
                    if (response.status !== 200) {
                        callback(null);
                    }
                });
            }

            var getFBAcount = function (callback) {
                return $http.get(serviceBase + 'api/News/GetFacebookPageInfo').then(function (response) {
                    callback(response.data);
                });
            }

            var getFBposts = function (callback) {
                return $http.get(serviceBase + 'api/News/GetFacebookPosts').then(function (response) {
                    callback(response.data);
                });
            }

            var getTwitterAccount = function (callback) {
                return $http.get(serviceBase + 'api/News/GetTwitterAccount').then(function (response) {
                    callback(response.data);
                });
            }

            var getTwitterPosts = function (callback) {
                return $http.get(serviceBase + 'api/News/GetTwitterPosts').then(function (response) {
                    callback(response.data);
                });
            }

            var getLastEvents = function (skip, take, callback) {
                return $http.get(serviceBase + 'api/Event/GetEvents', { skip: skip, take: take }).then(function (response) {
                    callback(response.data);
                });
            }

            var getEventOverview = function (eventId, callback) {
                return $http.get(serviceBase + 'api/Event/GetFullEventById/' + eventId).success(function (response) {
                    callback(response);
                }).error(function (response) {
                    if (response.status !== 200) {
                        callback(null);
                    }
                });
            }

            var joinToEvent = function (eventId, isSignIn, callback) {
                return $http.post(serviceBase + 'api/Event/JoinToEvent', JSON.stringify({ Id: eventId, Name: isSignIn })).then(function (response) {
                    callback(response.data);
                });
            }

            serviceFactory.getProfile = getProfile;
            serviceFactory.getProfileForUpdate = getProfileForUpdate;
            serviceFactory.searchProfiles = searchProfiles;
            serviceFactory.getFilters = getFilters;
            serviceFactory.getLastNews = getLastNews;
            serviceFactory.getLastEvents = getLastEvents;
            serviceFactory.updateProfile = updateProfile;
            serviceFactory.getNewsOverview = getNewsOverview;
            serviceFactory.getFBAcount = getFBAcount;
            serviceFactory.getFBposts = getFBposts;
            serviceFactory.getTwitterAccount = getTwitterAccount;
            serviceFactory.getTwitterPosts = getTwitterPosts;
            serviceFactory.getEventOverview = getEventOverview;
            serviceFactory.joinToEvent = joinToEvent;
            serviceFactory.reallocModelInstance = reallocModelInstance;

            return serviceFactory;
        }])

    .factory('jobOfferService', ['$http', '$q', 'localStorageService', '$location',
        function ($http, $q, localStorageService, $location) {

            var serviceBase = $location.protocol() + '://' + $location.host() + '/';
            var jobServiceFactory = {};
            var model = {
                country: '',
                state: '',
                city: '',
                types: [],
                keywords: '',
                skip: '',
                take: ''
            };

            jobServiceFactory.searchJobModel = model;

            var reallocModelInstance = function () {
                jobServiceFactory.searchJobModel = {
                    country: '',
                    state: '',
                    city: '',
                    types: [],
                    keywords: '',
                    skip: '',
                    take: ''
                };
            }

            var getJobTypes = function (callback) {
                return $http.get(serviceBase + 'api/Job/GetJobTypes').then(function (response) {
                    callback(response.data);
                });
            }

            var getOffers = function (model, callback) {
                return $http.post(serviceBase + 'api/Job/GetOffers', model).then(function (response) {
                    callback(response.data);
                });
            }

            var getJob = function (id, callback) {
                return $http.get(serviceBase + 'api/Job/GetJob/' + id).success(function (response) {
                    callback(response);
                }).error(function (response) {
                    if (response.status !== 200) {
                        callback(null);
                    }
                });
            }

            var postJob = function (model, callback) {
                return $http.post(serviceBase + 'api/Job/Post', model).then(function (response) {
                    callback(response.data);
                });
            }

            jobServiceFactory.getJobTypes = getJobTypes;
            jobServiceFactory.getOffers = getOffers;
            jobServiceFactory.getJob = getJob;
            jobServiceFactory.postJob = postJob;
            jobServiceFactory.reallocModelInstance = reallocModelInstance;

            return jobServiceFactory;
        }])

    .factory('locationService', ['$http', '$q', 'localStorageService', '$location',
        function ($http, $q, localStorageService, $location) {

            var serviceBase = $location.protocol() + '://' + $location.host() + '/';
            var jobServiceFactory = {};

            var getCountries = function (callback) {
                return $http.get(serviceBase + 'api/Location/GetAllCountries').then(function (response) {
                    callback(response.data);
                });
            }

            var getStates = function (country, callback) {
                return $http.get(serviceBase + 'api/Location/GetAllStates/' + country).then(function (response) {
                    callback(response.data);
                });
            }

            var getCities = function (state, callback) {
                return $http.get(serviceBase + 'api/Location/GetAllCities/' + state).then(function (response) {
                    callback(response.data);
                });
            }

            jobServiceFactory.getCountries = getCountries;
            jobServiceFactory.getStates = getStates;
            jobServiceFactory.getCities = getCities;

            return jobServiceFactory;
        }])

    .factory('infoService', ['$http', '$location',
        function ($http, $location) {

            var serviceFactory = {};
            var serviceBase = $location.protocol() + '://' + $location.host() + '/api/';

            serviceFactory.getUniversities = function (callback) {
                return $http.get(serviceBase + 'University/GetAllNames').then(function (response) {
                    callback(response.data);
                });
            };

            serviceFactory.getColleges = function (university, index, callback) {
                return $http.post(serviceBase + 'University/GetColleges', university).then(function (response) {
                    callback(response.data, index);
                });
            }

            serviceFactory.getMajors = function (university, college, index, callback) {
                return $http.post(serviceBase + 'University/GetMajors', { University: university, College: college }).then(function (response) {
                    callback(response.data, index);
                });
            }


            serviceFactory.getLanguages = function (callback) {
                return $http.get(serviceBase + 'Information/GetLanguages').then(function (response) {
                    callback(response.data);
                });
            };

            serviceFactory.getHelpTypes = function (callback) {
                return $http.get(serviceBase + "Information/GetHelpTypes").then(function (response) {
                    callback(response.data);
                });
            };

            serviceFactory.getPreferredContacts = function (callback) {
                return $http.get(serviceBase + "Information/GetPreferredContacts").then(function (response) {
                    callback(response.data);
                });
            };

            serviceFactory.getCompanies = function (callback) {
                return $http.get(serviceBase + "Information/GetCompanies").then(function (response) {
                    callback(response.data);
                });
            };

            serviceFactory.getIndustries = function (callback) {
                return $http.get(serviceBase + "Information/GetIndustries").then(function (response) {
                    callback(response.data);
                });
            };

            serviceFactory.getHomeInfo = function (callback) {
                return $http.get(serviceBase + "Information/GetHomeScreenInfo").then(function (response) {
                    callback(response.data);
                });
            };

            serviceFactory.getSiteLanguages = function (callback) {
                return $http.get(serviceBase + 'Information/GetSiteLanguages').then(function (response) {
                    callback(response.data);
                });
            };

            serviceFactory.getCountries = function (callback) {
                return $http.get(serviceBase + 'Location/GetCountries').then(function (response) {
                    callback(response.data);
                });
            }

            serviceFactory.getAllCountries = function (callback) {
                return $http.get(serviceBase + 'Location/GetAllCountries').then(function (response) {
                    callback(response.data);
                });
            }

            serviceFactory.getStates = function (country, callback) {
                return $http.get(serviceBase + 'Location/GetStates/' + country).then(function (response) {
                    callback(response.data);
                });
            }

            serviceFactory.getAllStates = function (country, callback) {
                return $http.get(serviceBase + 'Location/GetAllStates/' + country).then(function (response) {
                    callback(response.data);
                });
            }

            serviceFactory.getCities = function (state, callback) {
                return $http.get(serviceBase + 'Location/GetCities/' + state).then(function (response) {
                    callback(response.data);
                });
            }

            serviceFactory.getAllCities = function (state, callback) {
                return $http.get(serviceBase + 'Location/GetAllCities/' + state).then(function (response) {
                    callback(response.data);
                });
            }

            return serviceFactory;
        }])

    .factory('uploadService', ['$http', '$location',
        function ($http, $location) {

            var serviceFactory = {};
            var serviceBase = $location.protocol() + '://' + $location.host() + '/api/';

            //var uploader = new FileUploader({
            //    url: serviceBase + 'Upload/Image'
            //});

            //uploader.onSuccessItem = function (fileItem, response, status, headers) {
            //    console.log('onSuccessItem');
            //};

            //uploader.filters.push({
            //    name: 'customFilter',
            //    fn: function (item /*{File|FileLikeObject}*/, options) {
            //        return this.queue.length < 10;
            //    }
            //});

            //serviceFactory.uploader = uploader;

            serviceFactory.crop = function (model, callback) {
                return $http.post(serviceBase + 'Upload/Crop', model)
                    .success(function (data, status, headers, config) {
                        callback(data)
                    })
                    .error(function (data, status, headers, config) {
                        callback(data);
                    });
            };

            return serviceFactory;
        }])

    .factory('messageService', ['$http', '$q', 'localStorageService', '$location',
        function ($http, $q, localStorageService, $location) {

            var serviceBase = $location.protocol() + '://' + $location.host() + '/';
            var serviceFactory = {};

            serviceFactory.isNeedCountersUpdated = true;

            // Filtering
            var getFilteredInbox = function (pagingModel, callback) {
                return $http.post(serviceBase + 'api/Message/GetFilteredInbox', pagingModel).then(function (response) {
                    callback(response.data);
                });
            }

            var getFilteredSent = function (pagingModel, callback) {
                return $http.post(serviceBase + 'api/Message/GetFilteredSent', pagingModel).then(function (response) {
                    callback(response.data);
                });
            }

            var getFilteredDrafts = function (pagingModel, callback) {
                return $http.post(serviceBase + 'api/Message/GetFilteredDrafts', pagingModel).then(function (response) {
                    callback(response.data);
                });
            }

            var getFilteredStarred = function (pagingModel, callback) {
                return $http.post(serviceBase + 'api/Message/GetFilteredStarred', pagingModel).then(function (response) {
                    callback(response.data);
                });
            }

            var getMessageDetails = function (messageId, callback) {
                return $http.get(serviceBase + 'api/Message/GetDetailsById?messageId=' + messageId)
                    .success(function (response) {
                        callback(response);
                    })
                    .error(function (response) {
                        if (response.status !== 200) {
                            callback(null);
                        }
                    });
            }

            // Actions
            var markAsStarred = function (messageId, isMarked, callback) {
                return $http.post(serviceBase + 'api/Message/SetStarred', JSON.stringify({ Id: messageId, Name: isMarked })).then(function (response) {
                    callback(response.data);
                });
            }

            var markAsReaded = function (messages, callback) {
                return $http.post(serviceBase + 'api/Message/SetReaded', JSON.stringify({ Messages: messages, Property: false })).then(function (response) {
                    callback(response.data);
                });
            }

            var markAsUnreaded = function (messages, callback) {
                return $http.post(serviceBase + 'api/Message/SetReaded', JSON.stringify({ Messages: messages, Property: true })).then(function (response) {
                    callback(response.data);
                });
            }

            var deleteMessages = function (messages, callback) {
                return $http.post(serviceBase + 'api/Message/Delete', JSON.stringify({ Messages: messages })).then(function (response) {
                    callback(response.data);
                });
            }

            // Counters
            var getTotalUnread = function (callback) {
                return $http.get(serviceBase + 'api/Message/GetTotalUnread').then(function (response) {
                    callback(response.data);
                });
            }

            var getTotalDrafts = function (callback) {
                return $http.get(serviceBase + 'api/Message/GetTotalDrafts').then(function (response) {
                    callback(response.data);
                });
            }

            var getTotalStarred = function (callback) {
                return $http.get(serviceBase + 'api/Message/GetTotalStarred').then(function (response) {
                    callback(response.data);
                });
            }

            var getCounters = function (callback) {
                return $http.get(serviceBase + 'api/Message/GetCounters').then(function (response) {
                    callback(response.data);
                });
            }

            // Additional actions
            var getRecipients = function (users, term, callback) {
                return $http.post(serviceBase + 'api/Message/GetRecipients', JSON.stringify({ ExeptingUsers: users, Term: term })).then(function (response) {
                    callback(response.data);
                });
            }

            var checkUsers = function (users, callback) {
                return $http.post(serviceBase + 'api/Message/CheckRecipients', JSON.stringify({ UserNames: users })).then(function (response) {
                    callback(response.data);
                });
            }

            var sendMessage = function (model, callback) {
                return $http.post(serviceBase + 'api/Message/SendMessage', model).then(function (response) {
                    callback(response.data);
                });
            }

            serviceFactory.getRecipients = getRecipients;
            serviceFactory.checkUsers = checkUsers;
            serviceFactory.getMessageDetails = getMessageDetails;
            serviceFactory.markAsStarred = markAsStarred;
            serviceFactory.markAsReaded = markAsReaded;
            serviceFactory.markAsUnreaded = markAsUnreaded;
            serviceFactory.deleteMessages = deleteMessages;

            serviceFactory.getTotalUnread = getTotalUnread;
            serviceFactory.getTotalDrafts = getTotalDrafts;
            serviceFactory.getTotalStarred = getTotalStarred;
            serviceFactory.getCounters = getCounters;

            serviceFactory.sendMessage = sendMessage;

            serviceFactory.getFilteredSent = getFilteredSent;
            serviceFactory.getFilteredInbox = getFilteredInbox;
            serviceFactory.getFilteredDrafts = getFilteredDrafts;
            serviceFactory.getFilteredStarred = getFilteredStarred;


            return serviceFactory;
        }])

    .factory('settingsService', ['$http', '$location',
        function ($http, $location) {

            var serviceFactory = {};
            var serviceBase = $location.protocol() + '://' + $location.host() + '/api/';

            serviceFactory.changePassword = function (passwordModel, callback) {
                return $http.post(serviceBase + 'Account/ChangePassword', passwordModel)
                    .success(function (data, status, headers, config) {
                        callback('OK')
                    })
                    .error(function (data, status, headers, config) {
                        callback(data.ModelState);
                    });
            }

            serviceFactory.changeEmail = function (email, callback) {
                return $http.post(serviceBase + 'Account/ChangeEmail', email)
                    .success(function (data, status, headers, config) {
                        callback('OK')
                    })
                    .error(function (data, status, headers, config) {
                        callback(data.ModelState);
                    });
            }

            serviceFactory.getUserInfo = function (callback) {
                return $http.get(serviceBase + 'Account/UserInfo').then(function (response) {
                    callback(response.data);
                });
            };

            serviceFactory.getProfileType = function (callback) {
                return $http.get(serviceBase + 'Account/GetProfileType').then(function (response) {
                    callback(response.data);
                });
            }

            serviceFactory.setProfileType = function (isPublic, callback) {
                return $http.get(serviceBase + 'Account/SetProfileType/' + isPublic).then(function (response) {
                    callback(response.data);
                });
            }

            serviceFactory.getNotificationSettings = function (callback) {
                return $http.get(serviceBase + 'Account/GetNotificationSettings').then(function (response) {
                    callback(response.data);
                });
            }

            serviceFactory.setNotificationSettings = function (isNotify, callback) {
                return $http.get(serviceBase + 'Account/SetNotificationSettings/' + isNotify).then(function (response) {
                    callback(response.data);
                });
            }

            serviceFactory.getLanguage = function (callback) {
                return $http.get(serviceBase + 'Account/GetAccountLanguage').then(function (response) {
                    callback(response.data);
                });
            }

            serviceFactory.setLanguage = function (language, callback) {
                return $http.get(serviceBase + 'Account/SetAccountLanguage/' + language).then(function (response) {
                    callback(response.data);
                });
            }

            return serviceFactory;
        }]);