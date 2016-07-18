(function(angular) {
    'use strict';

    angular.module('omtApp').factory('tileSetService', ['storeService', 'TILE_SET_ITEMS', function (storeService, TILE_SET_ITEMS) {

        var _colecctionTiles = [];

        /**
         *
         * @returns {*}
         */
        function callCollectionTiles() {
            return angular.copy(_colecctionTiles);
        }

        /**
         *
         * @returns {*}
         */
        function getCollectionTiles() {
            return _colecctionTiles;
        };

        /**
         *
         */
        function init(){
            if(TILE_SET_ITEMS.length){
                storeService.setCollectionTiles(TILE_SET_ITEMS);
                _colecctionTiles = storeService.getCollectionTiles();
            }
        };

        init();
        
        var service = {
            callCollectionTiles: callCollectionTiles,
            getCollectionTiles: getCollectionTiles
        };

        return service;
    }]);

})(window.angular);
