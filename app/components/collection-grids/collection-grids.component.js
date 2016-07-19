(function(angular) {
    'use strict';

    function collectionGridsController($scope, $mdBottomSheet, collectionGrids) {

        /**
         *
         * @type {Object}
         */
        var ctrl = this;

        /**
         *
         * @type {Array}
         * @private
         */
        var _grids = [];

        /**
         *
         * @returns {Array}
         */
        ctrl.getCollectionGrids = function() {
            return _grids;
        };

        /**
         *
         * @param collectionId
         */
        ctrl.selectCollectionGrids = function(collectionId) {
            collectionGrids.setSelectedCollectionGrids(collectionId);
        };

        /**
         *
         */
        var init = function() {
            _grids = collectionGrids.getCollectionGrids();
        };

        init();

    }

    angular
        .module('collectionGrids')
        .component('collectionGrids', {
            templateUrl: 'components/collection-grids/collection-grids.template.html',
            controller: collectionGridsController,
            bindings: {

            },
            require: {
                customizerCtrl: '^customizer'
            }
        });

})(window.angular);