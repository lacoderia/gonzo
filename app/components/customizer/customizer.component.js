(function(angular) {
    'use strict';

    function customizerController() {

        /**
         *
         * @type {taskController}
         */
        var ctrl = this;

        console.log('ENTRE AQUI')
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