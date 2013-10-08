'use strict';

/* Controllers */

function TaskListCtrl($scope, Task) {
  $scope.tasks = Task.query('');

  $scope.add = function () {
  	var task = {
  		title: $scope.titleText,
  		state: "new"
  	};
  	$scope.tasks.push(task);
  	$scope.titleText = '';
  };

  $scope.delete = function (id) {
  	$scope.tasks.pop();
  }
}


myApp.controller('PhoneListCtrl', ['$scope', 'Task', TaskListCtrl]);