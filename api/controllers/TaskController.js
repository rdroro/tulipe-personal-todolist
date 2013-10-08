/**
 * TaskController
 *
 * @module		:: Controller
 * @description	:: Contains logic for handling requests.
 */

 module.exports = {

 	taskList: function (req, resp) {
 		Task.find().exec(function (err, tasks){
 			resp.view({
 				tasks: tasks
 			});
 		});
 	}


 };
