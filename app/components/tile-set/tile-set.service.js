(function(angular) {
    'use strict';

    angular.module('omtApp').factory('tileSetService', ['storeService', 'TILE_SET_ITEMS', function (storeService, TILE_SET_ITEMS) {

        init();

        //var _colecctionTiles = [];
        var _colecctionTiles = storeService.getCollectionsTiles();

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
        function getCollectionsTiles() {
            console.log(storeService.getCollectionsTiles())
            //return storeService.getCollectionsTiles();
        };

        /**
         *
         */
        function init(){
            if(TILE_SET_ITEMS.length > 0){
                storeService.setCollectionsTiles(TILE_SET_ITEMS);
            }
        };
        
        var service = {
            callCollectionTiles: callCollectionTiles,
            getCollectionsTiles: getCollectionsTiles
        };

        return service;
    }]);

})(window.angular);
