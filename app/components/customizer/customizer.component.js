(function(angular) {
    'use strict';

    function customizerController() {

        /**
         *
         * @type {Object}
         */
        var ctrl = this;

        /**
         * stepper object
         */
        ctrl.steps = {
            step1: {
                completed: false,
                disabled: false
            },
            step2: {
                completed: false,
                disabled: false
            },
            step3: {
                completed: false,
                disabled: false
            },
            step4: {
                completed: false,
                disabled: true
            }
        };

        ctrl.selectedStep = 0;
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