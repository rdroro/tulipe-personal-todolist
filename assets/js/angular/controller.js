'use strict';

/* Controllers */

function TaskListCtrl($scope, $routeParams, Task) {
  $scope.tasks = Task.query({parent: 0});

  $scope.add = function (parent) {
    var parent = typeof(parent) == "undefined" ? 0 : parent;
    var task = {
      title: $scope.titleText,
      state: 'new',
      parent: parent
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
        // var index set the position of the task in $scope.tasks
        var index = i;
        Task.delete(task, function (value, responseHeaders){
          // remove task in $scope.tasks if the server request succeded
          $scope.tasks.splice(index, 1);
        });
      }
    };
  }
}

function TaskDetailCtrl($scope, $routeParams, Task) {
  $scope.cTask = Task.get({id: $routeParams.taskId});
  console.log($scope.cTask);
  $scope.taskDetail = Task.query({parent: $routeParams.taskId});
}




myApp.controller('TaskListCtrl', ['$scope', '$routeParams', 'Task', TaskListCtrl]);
myApp.controller('TaskDetailCtrl', ['$scope', '$routeParams', 'Task',  TaskDetailCtrl]);