(function(angular) {
    'use strict';

    angular.module('omtApp').factory('collectionTilesService', ['$http', 'AUTH_API_URL_BASE', function ($http, AUTH_API_URL_BASE) {

        /**
         * Collection tiles array
         */
        var _collectionTiles = [];

        /**
         * Selected collection
         */
        var _selectedCollection = undefined;

        /**
         * Selected tiles
         */
        var _selectedTiles = [];

        var callCollectionTiles = function () {
            var serviceURL = AUTH_API_URL_BASE + '/tiles/tile_types';
            return $http.get(serviceURL, {}).then(
                function (response) {
                    try{
                        if(response.data){
                            _collectionTiles = [];
                            for(var itemIndex=0; itemIndex<response.data.tile_types.length; itemIndex++){
                                var tile_type = response.data.tile_types[itemIndex];
                                var collectionTile = {
                                    id: tile_type.key,
                                    title: tile_type.value,
                                    inches: tile_type.inches,
                                    centimeters: tile_type.centimeters,
                                    tiles: [],
                                };
                                _collectionTiles.push(collectionTile);
                            }
                        }
                    }catch(error){
                        console.log(error);
                    }
                },
                function (error) {
                    console.log(error);
                }
            );
        };

        /**
         *
         */
        function getCollectionTiles() {
            return angular.copy(_collectionTiles);
        };

        /**
         *
         * @param collectionTiles
         */
        function setCollectionTiles(collectionTiles) {
            _collectionTiles = collectionTiles;
        };

        /**
         *
         * @returns {*}
         */
        function getSelectedCollectionTiles() {
            return angular.copy(_selectedCollection);
        };

        /**
         *
         * @param selectedCollection
         */
        function setSelectedCollectionTiles(collectionId) {
            var collections = _collectionTiles.filter(function(item) {
                return item.id == collectionId;
            });

            if(collections.length > 0){
                _selectedCollection = collections[0];
            }

        };

        /**
         *
         * @returns {*}
         */
        function getSelectedTiles() {
            return angular.copy(_selectedTiles);
        };

        /**
         *
         * @param selectedTiles
         */
        function setSelectedTiles(selectedTiles) {
            _selectedTiles = selectedTiles;
        };

        
        var service = {
            callCollectionTiles: callCollectionTiles,
            getCollectionTiles: getCollectionTiles,
            setCollectionTiles: setCollectionTiles,
            getSelectedCollectionTiles: getSelectedCollectionTiles,
            setSelectedCollectionTiles: setSelectedCollectionTiles,
            getSelectedTiles: getSelectedTiles,
            setSelectedTiles: setSelectedTiles
        };

        return service;
    }]);

})(window.angular);
