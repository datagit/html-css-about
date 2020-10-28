const sass = require('node-sass');
module.exports = function (grunt) {

    // Project configuration.
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        // describe list tasks at here
        // >> setting for uglify
        uglify: {
            options: {
                // row will be put at head out put file
                banner: '/*! <%= pkg.name %> - v<%= pkg.version %> - ' +
                '<%= grunt.template.today("yyyy-mm-dd") %> */'
            },
            build: {
                files: {
                    'build/hello.min.js' : ['src/hello.js']
                }
            }
        },
        // <<
        // >>
        sass: {
            options: {
                implementation: sass,
                sourceMap: false
            },
            dist: {
                files: {
                    'css/main.css': 'scss/main.scss'
                }
            }
        },
        // <<
        // >> setting for watch
        watch: {
            scripts: {
              files: ['**/*.js', 'scss/*.scss'],
              //tasks: ['jshint'],
              tasks: ['uglify'],
              tasks: ['sass'],
              options: {
                spawn: false,
              },
            },
          },
        // <<
    });

    // Load the plugin that provides the "uglify" task.
    grunt.loadNpmTasks('grunt-contrib-uglify');

    // load the plugin that provides the 'sass' task
    grunt.loadNpmTasks('grunt-sass');

    // load the plugin that provides the 'watch' task
    grunt.loadNpmTasks('grunt-contrib-watch');

    // Default task(s).
    grunt.registerTask('default', ['watch']);

};
