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
    },

    uglify: {
      build: {
        src: 'js/build/production.js',
        dest: 'js/build/production.min.js'
      },
    },
    
    cssmin: {
      target: {
        files: [{
            expand: true,
            cwd: 'css/build',
            src: ['*.css', '!*.min.css'],
            dest: 'css/build',
            ext: '.min.css',
        }],
    },
  },
  });

  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-cssmin');

  grunt.registerTask('default', ['concat', 'uglify', 'cssmin']);
};
