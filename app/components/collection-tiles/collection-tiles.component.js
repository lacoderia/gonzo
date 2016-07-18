(function(angular) {
    'use strict';

    function collectionTilesController(storeService, collectionTilesService) {

        /**
         *
         * @type {Object}
         */
        var ctrl = this;

        /**
         *
         * @returns {*}
         */
        ctrl.getCollectionTiles = function() {
            return collectionTilesService.getCollectionsTiles();
        };

        /**
         *
         * @param collectionId
         */
        ctrl.selectCollectionTiles = function(collectionId) {
            collectionTilesService.selectCollectionTiles(collectionId);
        };

        /**
         *
         * @returns {*}
         */
        ctrl.getSelectedCollectionTile = function() {
            var tiles = (storeService.getSelectedCollectionTile())? storeService.getSelectedCollectionTile().tiles : [];
            console.log(tiles);
            return tiles;
        } ;

    }

    angular
        .module('collectionTiles')
        .component('collectionTiles', {
            templateUrl: 'components/collection-tiles/collection-tiles.template.html',
            controller: collectionTilesController,
            bindings: {

            }
        });

})(window.angular);