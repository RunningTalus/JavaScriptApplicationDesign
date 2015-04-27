'use strict';

module.exports = function(grunt){
  grunt.initConfig({
    sprite: {
      icons: {
        src: 'public/img/icons/*.png',
        dest: 'build/img/icons.png',
        destCss: 'build/css/icons.css',
      }
    }
  });

  grunt.loadNpmTasks('grunt-spritesmith');
};