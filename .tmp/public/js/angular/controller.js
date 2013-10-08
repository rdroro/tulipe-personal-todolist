'use strict';

/* Controllers */

function TaskListCtrl($scope, Task) {
  $scope.tasks = Task.query('');

  $scope.add = function () {
    // var task = new Task();
    // task.title = $scope.titleText;
    // task.state = 'new';

    var task = {
      title: $scope.titleText,
      state: 'new'
    };

    // Send HTTP POST request to backend to save new task
    Task.create(task, function (createdTask, responseHeaders) {
      $scope.tasks.push(createdTask);
      $scope.titleText = '';
    });
  };

  $scope.delete = function (id) {
    var task = {
      id:id
    };
    for (var i = 0; i < $scope.tasks.length; i++) {
      if ( $scope.tasks[i].id === id ) {
        Task.delete(task, function (value, responseHeaders){
          $scope.tasks.splice(i, 1);
          console.log($scope.tasks);
        });
      }
    };
  }
}


myApp.controller('PhoneListCtrl', ['$scope', 'Task', TaskListCtrl]);