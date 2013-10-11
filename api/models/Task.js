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
  	},
    childCount: "integer"
    
  },

  afterCreate: function (createdRecord, next) {
    // Update childCount if createdRecord is a child of a task
    if (createdRecord.parent != 0 ) {
      Task.updateNumberOfChild(createdRecord.parent);
    }
    next();
  },

  beforeDestroy: function (criteria, callback) {
    if (typeof(criteria.where.id) != "undefined") {
      Task.findOneById(criteria.where.id).exec(function (err, record) {
        // if the task is a sub-task, we need to update childCount to the mother task
        if (record.parent != 0) {
          Task.findOneById(record.parent).exec(function (err, parentRecord) {
            var decrementChildCount = parseInt(parentRecord.childCount) - 1 ;
            Task.update({id: parentRecord.id}, {childCount: decrementChildCount}, function (err, updatedTask) {
              // @todo manager error
            });
          });
        } 
        // if the task is a top-level task, we need to destroy all sub-tasks
        else {
          Task.destroy({parent: record.id}).done(function (err) {
            Task.updateNumberOfChild(record.id);
          });
        }
      });
    }
    callback();
  },

  updateNumberOfChild: function (parentTaskId) {
    Task.countByParent(parentTaskId).exec(function (err, childRecords) {
      if (err) {
        return false;
      }
      Task.update({
        id: parentTaskId
      }, {
        childCount: childRecords
      }, function (err, updatedTask) {
        // @todo manage errors
      });
    });
  }

};
