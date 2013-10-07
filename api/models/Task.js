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
  		maxLength: 30
  	},
  	description: {
  		type: "string",
  		maxLength: 140
  	},
  	parent: "integer",
  	state: {
  		type: "string",
  		in: ['new', 'in-progress', 'terminated', 'canceled']
  	}
    
  }

};
