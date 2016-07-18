(function(angular) {
    'use strict';

    function tileSetController(tileSetService) {

        /**
         *
         * @type {Object}
         */
        var ctrl = this;

        ctrl.getCollectionsTiles = function () {
            console.log('ENTR A GET COLLECTIONS')
            //return tileSetService.getCollectionsTiles();
        };

        ctrl.selectCollectionTiles = function(collectionId) {

        };

    }

    angular
        .module('tileSet')
        .component('tileSet', {
            templateUrl: 'components/tile-set/tile-set.template.html',
            controller: tileSetController,
            bindings: {

            }
        });

})(window.angular);