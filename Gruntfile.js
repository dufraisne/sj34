module.exports = function(grunt) {
	
	var includeAll;
	try {
		includeAll = require('include-all');
	} catch (e0) {
			console.error('Could not find `include-all` module.');
			console.error('Skipping grunt tasks...');
			console.error('To fix this, please run:');
			console.error('npm install include-all --save`');
			console.error();

			grunt.registerTask('default', []);
			return;
	}
	
	grunt.config.merge({
		pkg: grunt.file.readJSON('package.json'),
		exec: {
			'webdriver-update':{
				command: './node_modules/protractor/node_modules/webdriver-manager/bin/webdriver-manager update'
			},
			'webdriver-nohup': {
				command: './node_modules/protractor/node_modules/webdriver-manager/bin/webdriver-manager start &'
			},
			webdriver: {
				command: './node_modules/protractor/node_modules/webdriver-manager/bin/webdriver-manager start'
			}
		},
		
		protractor: {
			options: {
				configFile: "./app/config/protractor.conf.js",
				keepAlive: true,
				noColor: false,
				args: {}
			},
			e2e: {
				options: {
					keepAlive: false
				}
			}
		}
	});
	
	function loadTasks(relPath) {
		return includeAll({
			dirname: require('path').resolve(__dirname, relPath),
			filter: /(.+)\.js$/
		}) || {};
	}

	/**
	 * Invokes the function from a Grunt configuration module with
	 * a single argument - the `grunt` object.
	 */
	function invokeConfigFn(tasks) {
		for (var taskName in tasks) {
			if (tasks.hasOwnProperty(taskName)) {
				tasks[taskName](grunt);
			}
		}
	}
	
	// Load task functions
	var registerDefinitions = loadTasks('./app/tasks');
	grunt.loadNpmTasks('grunt-exec');
	grunt.loadNpmTasks('grunt-protractor-runner');

	// (ensure that a default task exists)
	if (!registerDefinitions.default) {registerDefinitions.default = function (grunt) { grunt.registerTask('default', []); };}

	// Run task functions to configure Grunt.
	invokeConfigFn(registerDefinitions);

	

};
