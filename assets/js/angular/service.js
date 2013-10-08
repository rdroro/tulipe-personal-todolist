'use strict';

/* Services */

angular.module('TaskListServices', ['ngResource']).
    factory('Task', function($resource){
  return $resource('task/:taskId', {}, {
    query: {method:'GET', params:{taskId:''}, isArray:true},
    create: {method: 'POST'},
    delete: {method: 'DELETE'}
  });
});
