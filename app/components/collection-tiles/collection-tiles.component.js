(function(angular) {
    'use strict';

    function collectionTilesController($scope, $mdBottomSheet, $mdToast, collectionTilesService, utilsService) {

        /**
         *
         * @type {Object}
         */
        var ctrl = this;
        var _collectionTiles;
        var _tiles;
        var _selectedCollectionTiles;
        var _selectedTiles;

        /**
         *
         * @param tile
         */
        var selectTile = function(tile) {
            _selectedTiles.push(tile);
        };

        /**
         *
         * @param tileId
         */
        var deselectTile = function(index) {
            _selectedTiles.splice(index, 1);
        };

        /**
         *
         * @returns {*}
         */
        ctrl.getCollectionTiles = function(){
            return _collectionTiles;
        };

        /**
         *
         * @returns {*}
         */
        ctrl.getSelectedCollectionTiles = function() {
            return _selectedCollectionTiles;
        };

        /**
         *
         * @param collectionId
         */
        ctrl.selectCollectionTiles = function(collectionId){
            try{
                _selectedTiles = undefined;
                collectionTilesService.setSelectedCollectionTiles(collectionId);
                _selectedCollectionTiles = collectionTilesService.getSelectedCollectionTiles();
                _tiles = _selectedCollectionTiles.tiles;
            }catch (error){
                console.log(error);
            }
            showGridBottomSheet();
        };


        /**
         *
         * @param collectionId
         * @returns {boolean}
         */
        ctrl.isSelectedCollectionTiles = function(collectionId) {
            if(_selectedCollectionTiles){
                return (_selectedCollectionTiles.id == collectionId);
            }
            return false;
        };

        /**
         *
         */
        ctrl.setSelectedTiles = function() {
            collectionTilesService.setSelectedCollectionTiles(_selectedTiles);
        };

        /**
         *
         * @param tileId
         * @returns {boolean}
         */
        ctrl.isSelectedTile = function (tileId){
            for(var tileIndex=0; tileIndex<_selectedTiles.length; tileIndex++){
                var tmpTile = _selectedTiles[tileIndex];
                if(tmpTile.id == tileId){
                    return true;
                }
            }
            return false;
            //console.log(utilsService.existItem(_selectedTiles, tileId));
        };

        /**
         *
         * @returns {boolean|*|Boolean}
         */
        ctrl.areSelectedTiles = function(){
            return utilsService.isEmpty(_selectedTiles);
        };

        /**
         *
         * @returns {boolean}
         */
        ctrl.areSelectedCollections = function() {
            return (_selectedCollectionTiles)? false : true;
        };

        /**
         *
         * @returns {*}
         */
        ctrl.getSelectedTiles = function () {
            return _selectedTiles;
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
            _selectedTiles = collectionTilesService.getSelectedTiles();
        };

        /**
         *
         */
        ctrl.toggleTile = function(tile) {
            try{
                for(var tileIndex=0; tileIndex<_selectedTiles.length; tileIndex++){
                    var tmpTile = _selectedTiles[tileIndex];
                    if(tmpTile.id == tile.id){
                        deselectTile(tileIndex);
                        return;
                    }
                }
                selectTile(tile);
            } catch(error){
                console.log(error)
            }
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
         * Inits the component
         */
        ctrl.init = function() {
            collectionTilesService.callCollectionTiles().then(
                function (){
                    _collectionTiles = collectionTilesService.getCollectionTiles();
                    _selectedTiles = collectionTilesService.getSelectedTiles();
                }
            );
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