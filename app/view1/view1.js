'use strict';

angular.module('myApp.view1', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/view1', {
    templateUrl: 'view1/view1.html',
    controller: 'View1Ctrl'
  });
}])

.controller('View1Ctrl', ['$http', '$q', function($http, $q) {

   var loginServiceURL = 'http://localhost:8081/index';

    return $http.post(loginServiceURL)
                .then(function(response) {
                    var data = response.data;                    
                }, function(error){
                    return $q.reject(error.data);
                });

}]);