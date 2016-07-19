(function(angular) {
    'use strict';

    angular.module('omtApp').factory('collectionTilesService', ['COLLECTION_TILES_ITEMS', function (COLLECTION_TILES_ITEMS) {

        var _collectionTiles;
        var _selectedCollection;
        var _selectedTiles;

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
        function getCollectionTiles() {
            _collectionTiles = COLLECTION_TILES_ITEMS; // TODO: Delete this line when service is available
            return angular.copy(_collectionTiles);
        }

        /**
         *
         * @param idCollection
         */
        function selectCollectionTiles(collectionId) {
            var collections = _collectionTiles.filter(function(item) {
               return item.id == collectionId;
            });

            if(collections || collections.length > 0){
                _selectedCollection = collections[0];
            }
        }

        function getSelectedCollectionTiles() {
            return angular.copy(_selectedCollection);
        };

        /**
         *
         * @returns {*}
         */
        function getSelectedTiles() {
            return angular.copy(_selectedTiles);
        }

        /**
         *
         * @param selectedTiles
         */
        function setSelectedTiles(selectedTiles) {
            _selectedTiles = selectedTiles;
        }

        
        var service = {
            callCollectionTiles: callCollectionTiles,
            getCollectionTiles: getCollectionTiles,
            selectCollectionTiles: selectCollectionTiles,
            getSelectedCollectionTiles: getSelectedCollectionTiles,
            getSelectedTiles: getSelectedTiles,
            setSelectedTiles: setSelectedTiles
        };

        return service;
    }]);

})(window.angular);
