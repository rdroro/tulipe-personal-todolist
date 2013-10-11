# tulipe-personal-todolist

Yet an other TodoList but ... with [Sails.js](sailsjs.org) and [AngularJS](http://angularjs.org/) and ... it's pretty cool

With tulipe-personal-todolist you can manage your tasks and classify them into 3 categories :
+ Important
+ Project
+ Reminder
You can also add sub-task (only one depth for the moment)

Responsive design for mobile devices with minimal width screen: 370px.

## Requirements

Tulipe-personal-todolist is a nodejs application builts with Sails.js and AngularJS.
Here are the versions of dependencies currently used:
+ nodejs v0.10.20 or higher
+ npm v1.3.11 or higher
+ sails v0.9.4
+ grunt: 0.4.1
+ ejs: 0.8.4 (sails dependencies currently not used)
+ optimist: 0.3.4

## Installation

**DEV - Installation Process**

+ Download archive from github [here](https://github.com/rdroro/tulipe-personal-todolist/archive/master.zip)
+ Unzip archive
+ Run npm install in unzipped folder to checkout dependencies
+ Start application by running : node app.js

In development mode, all data are saved on disk in file : .tmp/.disk.db

**If you want to test any modification, you can use `[nodemon](https://npmjs.org/package/nodemon)`. `nodemon` will automatically restart the application when files change. For thar start this app by using: **
	
	nodemon app.js



Application is now available from [http://localhost:1337](http://localhost:1337)

## Roadmap

+ Manage errors in the backend - model : Task (creation and deletion)
+ Do unit and ent-to-end test for angular
+ Display errors in UI
+ Do unit test for the sails backend
+ Implements Edit-In-Place
+ Improve angular controllers (one controller is maybe enough ...) 
