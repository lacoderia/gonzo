'use strict';

angular.
    module('omtApp').
    config(['$mdThemingProvider', 'localStorageServiceProvider',
        function config($mdThemingProvider, localStorageServiceProvider) {
            $mdThemingProvider.theme('default')
                .primaryPalette('light-green')
                .accentPalette('blue');

            localStorageServiceProvider.setPrefix('');
            localStorageServiceProvider.setStorageCookie(45, '/');
            localStorageServiceProvider.setStorageCookieDomain('');

    }]);

angular.module('omtApp')
    .constant('TILE_SET_ITEMS', [
        { 'id': 1, 'title': '12x12" (30x30cm)', 'inches': 12, 'centimeters': 30, 'tiles': [{id: 1, url: 'assets/images/collection-tiles/Amalia 12x12.svg'}, {id: 1, url: 'assets/images/collection-tiles/Amalia 12x12.svg'}] },
        { 'id': 2, 'title': '10x10" (25x25cm)', 'inches': 10, 'centimeters': 25, 'tiles': [] },
        { 'id': 3, 'title': '8x8" (20x20cm)', 'inches': 8, 'centimeters': 20, 'tiles': [] },
        { 'id': 4, 'title': '6x6" (15x15cm)', 'inches': 6, 'centimeters': 15, 'tiles': [] },
        { 'id': 5, 'title': '4x4" (10x10cm)', 'inches': 4, 'centimeters': 10, 'tiles': [] },
        { 'id': 6, 'title': '3x3" (7.5x7.5cm)', 'inches': 3, 'centimeters': 7.5, 'tiles': [] }
    ]);

