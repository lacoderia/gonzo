(function(angular) {
    'use strict';

    function tileSetController(tileSetService) {

        /**
         *
         * @type {Object}
         */
        var ctrl = this;

        ctrl.getCollectionTiles = function () {
            return tileSetService.getCollectionTiles();
        };

        ctrl.selectCollectionTiles = function(collectionId) {

        };

        ctrl.init = function() {

        }

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