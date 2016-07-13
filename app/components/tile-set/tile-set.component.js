(function(angular) {
    'use strict';

    function tileSetController(TILE_SET_ITEMS) {

        /**
         *
         * @type {Object}
         */
        var ctrl = this;

        ctrl.getTiLeSetItems = function () {
            return TILE_SET_ITEMS;
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