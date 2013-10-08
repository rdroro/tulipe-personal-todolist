/**
 * TemplateController
 *
 * @module		:: Controller
 * @description	:: Contains logic for handling requests.
 */

 module.exports = {

 	/*
 	 * Return answered template from template HTTP parameter
 	 */
 	 getTemplate: function (req, resp) {
 	 	var path = sails.config.paths.views;
 	 	var fs = require('fs');
 	 	var template = req.param('template');
 	 	fs.readFile(path+'/'+template+'/'+req.param('view'), function (err, data) {
 	 		resp.send(data);
 	 	});
 	 }


 	};
