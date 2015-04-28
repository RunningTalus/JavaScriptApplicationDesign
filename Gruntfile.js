'use strict';

module.exports = function(grunt) {
  grunt.registerTask('timestamp', 'Creates a file with a timestamp in it', function(){
    var options = this.options({
      file: 'timestamp'
    });
    var stamp = +new Date();
  //  cast date into a UNIX timestamp
    var contents = stamp.toString();

    grunt.file.write(options.file, contents);
  });

  grunt.initConfig({
    timestamp: {
      options: {
        file: 'public/timestamp.txt'
      }
    }
  })
};