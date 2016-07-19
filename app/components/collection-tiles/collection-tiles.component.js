(function(angular) {
    'use strict';

    function collectionTilesController($scope, $mdBottomSheet, $mdToast, collectionTilesService) {

        /**
         *
         * @type {Object}
         */
        var ctrl = this;
        var _collectionTiles;
        var _tiles;
        var _selectedTiles;
        /**
         *
         * @returns {*}
         */
        ctrl.getCollectionTiles = function(){
            return _collectionTiles;
        };

        /**
         *
         * @param collectionId
         */
        ctrl.selectCollectionTiles = function(collectionId){
            collectionTilesService.selectCollectionTiles(collectionId);
            _tiles = collectionTilesService.getSelectedCollectionTiles().tiles;
            showGridBottomSheet();
        };

        /**
         *
         * @returns {*}
         */
        ctrl.getSelectedTiles = function(){
            return _tiles;
        };

        /**
         *
         * @returns {*}
         */
        ctrl.getTiles = function() {
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
                        .textContent('¡Vamos bien!')
                        .position('top right')
                        .hideDelay(1500)
                );
            });
        };

        /**
         *
         */
        ctrl.completeStep = function() {
            ctrl.customizerCtrl.submitCurrentStep(ctrl.customizerCtrl.stepData[0].data);
            $mdBottomSheet.hide();
        };

        /**
         *
         */
        ctrl.init = function() {
            _collectionTiles = collectionTilesService.getCollectionTiles();
        };

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