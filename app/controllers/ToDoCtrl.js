'use strict';

angular
	.module('myApp')
	.controller("ToDoCtrl", function($scope, todoService, $filter) {
		var id = 0;
		$scope.data = {};
		$scope.data.todos = [];

		/* toggle color of complete btn */
		$scope.todoColor = function(b){
			var c = b ? '#73b95d' : '#b62f0f';
			return c;
		}

		/* set completed todos */
		$scope.$watch('data.todos', function () {
			$scope.percentComplete()
		}, true);

		/* calculate completed percentage */
		$scope.percentComplete = function(todos){
			$scope.completed = todoService.percent();
		}

		/* get completed percentage */
		$scope.getPercentage = function(){
			return $scope.completed;
		}

		/* get todos from local storage */
		$scope.getToDos = function(){
			var todos = todoService.get();
			$scope.update(todos);
		}

		/* add todo to local storage */
	  $scope.addToDo = function(){
	  	var newTodo = {};

	  	newTodo.id = id++;
	  	newTodo.title = $scope.new_todo;
	  	newTodo.complete = false;

	  	var todos = todoService.add(newTodo);
	  	$scope.update(todos);
	  }

	  /* remove todo from local storage */
	  $scope.removeToDo = function(todo){
	  	var todos = todoService.remove(todo);
	  	$scope.update(todos);
	  }

	  /* set completed state of a todo */
		$scope.toggleComplete = function(todos){
				console.log(todos);
				var todos = todoService.complete(todos);
				$scope.update(todos);
		};

		/* update todos in scope */
		$scope.update = function(todos){
			$scope.data.todos = todos;
		}

		$scope.getToDos();
});