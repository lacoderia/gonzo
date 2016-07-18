(function(angular) {
    'use strict';

    function collectionTilesController($scope, $mdBottomSheet, storeService, collectionTilesService) {

        /**
         *
         * @type {Object}
         */
        var ctrl = this;

        var _tiles = [];
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
            _tiles = storeService.getSelectedCollectionTile().tiles;

            showGridBottomSheet();
        };

        /**
         *
         * @returns {*}
         */
        ctrl.getSelectedCollectionTile = function() {
            return _tiles;
        };

        /**
         *
         */
        var resetTiles = function() {
            for(var i=0; i<_tiles.length; i++) {
                _tiles[i].selected = false;
            }
        };

        /**
         *
         */
        ctrl.toggleTile = function(tile) {
            tile.selected = !tile.selected;
        };

        /**
         *
         */
        var showGridBottomSheet = function() {
            resetTiles();

            $mdBottomSheet.show({
                templateUrl: 'components/collection-tiles/tile-selector.template.html',
                controller: collectionTilesController,
                scope: $scope,
                preserveScope: true,
            }).then(function(clickedItem) {
                $mdToast.show(
                    $mdToast.simple()
                        .textContent(clickedItem['name'] + ' clicked!')
                        .position('top right')
                        .hideDelay(1500)
                );
            });
        };

        /**
         *
         */
        ctrl.endStep = function() {
            console.log(ctrl.customizerCtrl.steps);
            $mdBottomSheet.hide();
        };

        /**
         *
         */
        ctrl.init = function() {
            _tiles = (storeService.getSelectedCollectionTile())? storeService.getSelectedCollectionTile().tiles : [];
        }

    }

    angular
        .module('collectionTiles')
        .component('collectionTiles', {
            templateUrl: 'components/collection-tiles/collection-tiles.template.html',
            controller: collectionTilesController,
            bindings: {

            },
            require: {
                customizerCtrl: '^customizer'
            }
        });

})(window.angular);