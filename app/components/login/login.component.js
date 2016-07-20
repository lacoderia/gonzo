(function(angular) {
    'use strict';

    function loginController($timeout, $location, loginService, routingService) {

        /**
         *
         * @type {loginController}
         */
        var ctrl = this;

        var currentView = 'login';
        var resetToken = undefined;

        ctrl.formErrorMessage = '';

        // Object that holds all possible views
        ctrl.VIEWS = {
            LOGIN: 'login',
            SIGNUP: 'signup',
            FORGOT: 'forgot',
            RESET: 'reset'
        };

        // Object that holds the username and password values
        ctrl.credentials = {
            nickname: '',
            password: undefined
        };

        // Object that holds new user parameters
        ctrl.newUser = {
            firstName: undefined,
            lastName: undefined,
            email: '',
            password: '',
            passwordConfirmation: ''
        };

        // Object that holds the recover password data
        ctrl.forgot = {
            email: ''
        };

        // Object that holds the recover password data
        ctrl.reset = {
            password: undefined,
            passwordConfirmation: undefined
        };

        // Private variables
        var originalCredentials = angular.copy(ctrl.credentials);
        var originalNewUser = angular.copy(ctrl.newUser);
        var originalForgot = angular.copy(ctrl.forgot);
        var originalReset = angular.copy(ctrl.reset);

        // Function that returns if the parameter view is the current view
        ctrl.isCurrentView = function(view){
            return (view == currentView);
        };

        // Function that toggles to login view
        ctrl.changeView = function(view){
            resetViewForm(view);
            currentView = view;
        };

        // Function to reset forms
        var resetViewForm = function(formName){

            ctrl.formErrorMessage = '';

            switch(formName){
                case 'login':
                    ctrl.credentials = angular.copy(originalCredentials);
                    //ctrl.loginForm.$setPristine();
                    //ctrl.loginForm.$setUntouched();
                    break;
                case 'signup':
                    ctrl.newUser = angular.copy(originalNewUser);
                    //ctrl.signupForm.$setPristine();
                    //ctrl.signupForm.$setUntouched();
                    break;
                case 'forgot':
                    ctrl.forgot = angular.copy(originalForgot);
                    //ctrl.forgotForm.$setPristine();
                    //ctrl.forgotForm.$setUntouched();
                    break;
                case 'reset':
                    ctrl.reset = angular.copy(originalReset);
                    //ctrl.resetForm.$setPristine();
                    //ctrl.resetForm.$setUntouched();
                    break;
                default:
                    break;
            }
        };

        // Function to authenticate a user
        ctrl.login = function() {

            ctrl.formErrorMessage = '';

            if(ctrl.loginForm.$valid) {

                loginService.login(ctrl.credentials)
                    .then(function(data) {
                        if(data.user){
                            $location.path('/customizer');
                        }
                    }, function(error) {
                        if(error && error.errors){
                            ctrl.formErrorMessage = error.errors[0].title;
                        }
                    });
            }

        };

        // Function to register a new user
        ctrl.signUp = function() {

            ctrl.formErrorMessage = '';

            var user = {
                first_name: ctrl.newUser.firstName,
                last_name: ctrl.newUser.lastName,
                email: ctrl.newUser.email,
                password: ctrl.newUser.password,
                password_confirmation: ctrl.newUser.confirmation
            };

            if(ctrl.signupForm.$valid) {

                loginService.signUp(user)
                    .then(function(data) {

                    }, function(error) {
                        if(error && error.errors){
                            ctrl.formErrorMessage = error.errors[0].title;
                        }
                    });
            }
        };

        // Function to recover user password
        ctrl.recoverPassword = function() {

            ctrl.formErrorMessage = '';

            if(ctrl.forgotForm.$valid) {

                loginService.recoverPassword(ctrl.forgot)
                    .then(function(data) {

                    }, function(error) {
                        if(error && error.errors){
                            ctrl.formErrorMessage = error.errors[0].title;
                        }
                    });
            }
        };

        // Function to reset user password
        ctrl.resetPassword = function() {

            ctrl.formErrorMessage = '';

            var reset = {
                reset_password_token: resetToken,
                password: ctrl.reset.password,
                password_confirmation: ctrl.reset.confirmation
            };

            if(ctrl.resetForm.$valid) {

                loginService.resetPassword(reset)
                    .then(function(data) {

                    }, function(error) {
                        if(error && error.errors){
                            ctrl.formErrorMessage = error.errors[0].title;
                        }
                    });
            }
        };

        this.$onInit = function() {
            resetToken = routingService.getParam('reset_password_token');
            $timeout(function(){
                if (resetToken) {
                    ctrl.changeView(ctrl.VIEWS.RESET);
                }
            }, 0);
        };

    }

    angular
        .module('login')
        .component('login', {
            templateUrl: 'components/login/login.template.html',
            controller: loginController,
            bindings: {

            }
        });

})(window.angular);