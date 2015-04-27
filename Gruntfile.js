module.exports = function(grunt) { // Exported function gets a grunt argument
  grunt.initConfig({  // Tasks are configured using initConfig, passing an object that describes them.
    jshint: ['Gruntfile.js']
  });
  grunt.loadNpmTasks('grunt-contrib-jshint'); // Load jshint package for configuration and execution.
  grunt.registerTask('default', ['jshint']); // Create a default alias, which will run the jshint task.
};