'use strict';

angular.module('myApp', ['ngRoute'])

.config(function($routeProvider,$locationProvider) {
	$locationProvider.hashPrefix('!');

	$routeProvider
	.when('/todo-view', {
		controller: 'ToDoCtrl',
		templateUrl: 'views/todo-view.html'

	 })
	 .when('/', {
			controller: 'ToDoCtrl',
			templateUrl: 'views/todo-view.html'
		})
		.otherwise({ redirect: '/todo-view' });
});