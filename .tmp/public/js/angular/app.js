'use strict';

/* App Module */

var myApp = angular.module('TaskApp', ['TaskListServices']).
config(['$routeProvider', function($routeProvider) {
	$routeProvider.
	when('/tasks', {templateUrl: '/templates/tasksList.html',   controller: 'TaskListCtrl'}).
	otherwise({redirectTo: '/tasks'});
}]);
