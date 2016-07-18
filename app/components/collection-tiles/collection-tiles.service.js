(function(angular) {
    'use strict';

    angular.module('omtApp').factory('collectionTilesService', ['storeService', 'TILE_SET_ITEMS', function (storeService, TILE_SET_ITEMS) {

        init();

        var _collectionTiles = storeService.getCollectionTiles();

        /**
         *
         * @returns {*}
         */
        function callCollectionTiles() {
            return angular.copy(_collectionTiles);
        }

        /**
         *
         * @returns {*}
         */
        function getCollectionsTiles() {
            return _collectionTiles;
        }

        /**
         *
         * @param idCollection
         */
        function selectCollectionTiles(idCollection) {
            var collections = _collectionTiles.filter(function(item) {
               return item.id == idCollection;
            });

            if(collections || collections.length > 0){
                storeService.setSelectedCollectionTile(collections[0]);
            }
        }

        /**
         *
         */
        function init(){
            if(TILE_SET_ITEMS.length > 0){
                storeService.setCollectionTiles(TILE_SET_ITEMS);
            }
        }
        
        var service = {
            callCollectionTiles: callCollectionTiles,
            getCollectionsTiles: getCollectionsTiles,
            selectCollectionTiles: selectCollectionTiles
        };

        return service;
    }]);

})(window.angular);
