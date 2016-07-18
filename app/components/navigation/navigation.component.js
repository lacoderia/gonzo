(function(angular) {
    'use strict';

    function navigationController() {

        /**
         *
         * @type {Object}
         */
        var ctrl = this;
    }

    angular
        .module('navigation')
        .component('navigation', {
            templateUrl: 'components/navigation/navigation.template.html',
            controller: navigationController,
            bindings: {

            }
        });

})(window.angular);
