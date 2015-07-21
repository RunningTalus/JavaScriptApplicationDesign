'use strict';

var util = require( 'util' );
var path = require( 'path' );

// cwd === current working directory, project root
var cwd = process.cwd();

// we'll store the private key somewhere safe, like bin/private
// bin/private should be explicitly ignored in `.gitignore`
var pemkey = function( name ) {
  var filename = util.format('private/%s.pem', name);
  return path.join(cwd, filename);
};

module.exports = function(grunt){
  grunt.initConfig({
    clean: {
      private: 'private'
    },

    jshint: {
      me: ['Gruntfile.js'],
      options: {
        jshintrc: '.jshintrc'
      }
    },

    // generates the key
    pem_gen: {
      // always use one key per file
      foo: { pem: pemkey('foo') },
      bar: { pem: pemkey('bar') }
    },
    // encrypts the plain text file, necessary to update the secure version
    pem_encrypt: {
      foo: { pem: pemkey('foo'), pemstore: 'secure/foo', rawstore: 'private/foo' },
      bar: { pem: pemkey('bar'), pemstore: 'secure/bar', rawstore: 'private/bar' }

    },
    // decrypts the secure file, making it usable
    pem_decrypt: {
      foo: { pem: pemkey('foo'), pemstore: 'secure/foo', rawstore: 'private/foo' },
      bar: { pem: pemkey('bar'), pemstore: 'secure/bar', rawstore: 'private/bar' }
    }

  });

  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  // load encryption tasks
  grunt.loadNpmTasks('grunt-pemcrypt');

};
