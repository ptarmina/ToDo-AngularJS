'use strict';

angular
	.module('myApp')
	.controller("ToDoCtrl", function($scope, todoService, $filter) {
		var id = 0;
		$scope.data = {};
		$scope.data.todos = [];

		$scope.$watch('data.todos', function () {
			$scope.percentComplete()
		}, true);

		$scope.getToDos = function(){
			var todos = todoService.get();
			$scope.update(todos);
		}

	  $scope.addToDo = function(){
	  	var newTodo = {};

	  	newTodo.id = id++;
	  	newTodo.title = $scope.new_todo;
	  	newTodo.complete = false;

	  	var todos = todoService.add(newTodo);
	  	$scope.update(todos);
	  }

	  $scope.removeToDo = function(todo){
	  	var todos = todoService.remove(todo);
	  	$scope.update(todos);
	  }
		$scope.toggleComplete = function(todos){
				var todos = todoService.complete(todos);
				$scope.update(todos);
		};

		$scope.update = function(todos){
			$scope.data.todos = todos;
		}

		$scope.percentComplete = function(todos){
			$scope.completed = todoService.percent();
		}

		$scope.getToDos();
});