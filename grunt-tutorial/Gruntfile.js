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
        // >> setting for watch
        watch: {
            scripts: {
              files: ['**/*.js'],
              //tasks: ['jshint'],
              tasks: ['uglify'],
              options: {
                spawn: false,
              },
            },
          },
        // <<
    });

    // Load the plugin that provides the "uglify" task.
    grunt.loadNpmTasks('grunt-contrib-uglify');

    // load the plugin that provides the 'watch' task
    grunt.loadNpmTasks('grunt-contrib-watch');

    // Default task(s).
    grunt.registerTask('default', ['uglify']);

};
