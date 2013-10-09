'use strict';

/* App Module */

var myApp = angular.module('TaskApp', ['TaskListServices']).
config(['$routeProvider', function($routeProvider) {
	$routeProvider.
	when('/tasks', {templateUrl: '/templates/tasksList.html',   controller: 'TaskListCtrl'}).
	when('/task/:taskId', {templateUrl: '/templates/taskDetail.html', controller: 'TaskDetailCtrl'}).
	otherwise({redirectTo: '/tasks'});
}]);
