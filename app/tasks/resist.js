/**
 * Be the change in the world you want to see. Lol.
 
 */
module.exports = function(grunt) {
    grunt.registerTask('resist', function(){

        // Associate Feature Files
        process.env.FEATURE_FILES = '../com/*.feature';
        process.env.STEP_DEFINITIONS = '../com/*.js';
        process.env.SELENIUM_URL = 'http://localhost:4444/wd/hub';
        
        grunt.task.run('protractor:e2e');
    });
};
