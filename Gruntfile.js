module.exports = function(grunt) {
  // Do grunt-related things in here
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    concat: {
      scripts: {
        src: [
          'js/libs/*.js',
          'js/ListScript.js'
        ],
        dest: 'js/build/production.js',
      },
      styles: {
        src: ['css/*.css'],
        dest: 'css/build/production.css',
      },
    },

    uglify: {
      build: {
        src: 'js/build/production.js',
        dest: 'js/build/production.min.js'
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-uglify');

  grunt.registerTask('default', ['concat', 'uglify']);
};
