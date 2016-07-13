(function(angular) {
    'use strict';

    function customizerController() {

        /**
         *
         * @type {Object}
         */
        var ctrl = this;

        console.log('ENTRE CUSTOMIZER')
    }

    angular
        .module('customizer')
        .component('customizer', {
            templateUrl: 'components/customizer/customizer.template.html',
            controller: customizerController,
            bindings: {

            }
        });

})(window.angular);