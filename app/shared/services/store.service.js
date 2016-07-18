(function(angular) {
    'use strict';

    angular.module('omtApp').factory('storeService', [function () {

        /**
         *
         * @type {any}
         * @private
         */
        var _selectedCollectionTile =  undefined;

        /**
         *
         * @type {Array<any>}
         * @private
         */
        var _selectedTiles = [];

        /**
         *
         * @type {Array<Any>}
         * @private
         */
        var _collectionsTiles = [];

        /**
         *
         * @returns {*}
         */
        function getCollectionsTiles() {
            return angular.copy(_collectionsTiles);
        };

        /**
         *
         * @param collectionTiles
         */
        function setCollectionsTiles(collectionsTiles) {
            _collectionsTiles = collectionsTiles;
        }

        /**
         *
         * @returns {*}
         */
        function getSelectedCollectionTile() {
            return angular.copy(_selectedCollectionTile);
        };

        /**
         *
         * @param selectedCollectionTile
         */
        function setSelectedColecciontTile(selectedCollectionTile) {
            _selectedCollectionTile = selectedCollectionTile;
        }

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
            getSelectedCollectionTile: getSelectedCollectionTile,
            setSelectedCollectionTile: setSelectedColecciontTile,
            getSelectedTiles: getSelectedTiles,
            setSelectedTile: setSelectedTiles,
            getCollectionsTiles: getCollectionsTiles,
            setCollectionsTiles: setCollectionsTiles
        };

        return service;
    }]);

})(window.angular);
