'use strict';

angular.module('myApp.main-view', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/main-view', {
    templateUrl: 'main-view/main-view.html',
    controller: 'View1Ctrl'
  });
}])

.controller('View1Ctrl', [function() {

}]);