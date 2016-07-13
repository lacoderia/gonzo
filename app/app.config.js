'use strict';

angular.
    module('omtApp').
    config(['$mdThemingProvider', 'localStorageServiceProvider',
        function config($mdThemingProvider, localStorageServiceProvider) {
            $mdThemingProvider.theme('default')
                .primaryPalette('light-green')
                .accentPalette('lime');

            localStorageServiceProvider.setPrefix('');
            localStorageServiceProvider.setStorageCookie(45, '/');
            localStorageServiceProvider.setStorageCookieDomain('');

    }]);

angular.module('omtApp')
    .constant('TILE_SET_ITEMS', [
        { 'code': 1, 'title': '12x12" (30x30cm)', 'sizeClass': 'size-30' },
        { 'code': 2, 'title': '10x10" (25x25cm)', 'sizeClass': 'size-25' },
        { 'code': 3, 'title': '8x8" (20x20cm)', 'sizeClass': 'size-20' },
        { 'code': 4, 'title': '6x6" (15x15cm)', 'sizeClass': 'size-15' },
        { 'code': 5, 'title': '4x4" (10x10cm)', 'sizeClass': 'size-10' },
        { 'code': 6, 'title': '3x3" (7.5x7.5cm)', 'sizeClass': 'size-7' }
    ]);

