'use strict';

angular
	.module('myApp')
	.factory('todoService', function($http, $filter, $q){

		var service = {};
		var _ID = 'todo';

		var data = {
			todos: []
		}

		/**
		Add and remove data to Local Storage
		*/
		var _get = function () {
			return JSON.parse(localStorage.getItem(_ID) || '[]');
		}

		var _add = function (todos) {
				localStorage.setItem(_ID, JSON.stringify(todos));
		}

		/* add todo */
		service.add = function(todo){
			data.todos.unshift(todo);
			_add(data.todos);

			return data.todos;
		}

		/* get todo */
		service.get = function(){
			angular.copy(_get(), data.todos);

			return data.todos;
		}

		/* remove todo */
		service.remove = function(todo){
			data.todos.splice(data.todos.indexOf(todo), 1);
			_add(data.todos);

			return data.todos;
		};

		/* update completed todos */
		service.complete = function(todos){
			_add(data.todos);

			return data.todos;
		};

		/* calculate percentage of complete todos */
		service.percent = function(todos){
			var completed;
			var complete = $filter('filter')(data.todos, { complete: true }).length;
			var total = data.todos.length;

			completed = parseInt((complete/total)*100);

			if(isNaN(completed)){
				completed = '';
			}

			return completed;
		};


  	return service;
});