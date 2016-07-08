'use strict';

angular.
module('omtApp').
config(['$mdThemingProvider', 'localStorageServiceProvider',
    function config($mdThemingProvider, localStorageServiceProvider) {
        $mdThemingProvider.theme('default')
            .primaryPalette('indigo')
            .accentPalette('orange');

        localStorageServiceProvider.setPrefix('');
        localStorageServiceProvider.setStorageCookie(45, '/');
        localStorageServiceProvider.setStorageCookieDomain('');

}]);

