'use strict';

module.exports = function(grunt) {
  grunt.initConfig({
    concat: {
      js: {
        files: {
          'build/js/bundle.js': 'public/js/**/*.js'
        }
      }
    },

    uglify: {
      bundle: {
        files: {
          'build/js/all.min.js': 'build/js/bundle.js'
        }
      }
    },

    clean: {
      js: 'build/js'
    },

    jshint: {
      files: 'public/js/**/*.js'
    }
  });

  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-jshint');

  grunt.registerTask('js', 'Clean, Lint, Concatenate, and Minify js files', ['clean:js','jshint:files','concat:js','uglify:bundle']);
};