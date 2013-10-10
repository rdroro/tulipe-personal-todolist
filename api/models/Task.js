/**
 * Task
 *
 * @module      :: Model
 * @description :: Task represents a simple todo task in a TodoList
 *
 */

module.exports = {

  attributes: {
  	
  	title: {
  		type: "string",
  		minLength: 1,
  		maxLength: 200
  	},
  	description: {
  		type: "string",
  		maxLength: 140
  	},
  	parent: "integer",
  	state: {
  		type: "string",
  		in: ['important', 'project', 'reminder']
  	}
    
  }

};
