module.exports = function (grunt) {
    // load all grunt tasks
    require('matchdep').filterDev('grunt-*').forEach(grunt.loadNpmTasks);

    // configurable paths
    var projectConfig = {
        dist: 'library',
        src: ''
    };

    try {
        projectConfig.src = require('./bower.json').appPath || projectConfig.src;
    } catch (e) {}

    grunt.initConfig({
        clean: {
            build: '<%= config.dist %>'
        },
        config: projectConfig,
        less: {
            development: {
                files: {
                    "library/css/bootstrap-custom.css": "library/less/bootstrap-custom.less"
                },
                options: {
                    paths: ["library/less/"]
                }
            },
            production: {
                files: {
                    "library/css/bootstrap-custom.min.css": "library/less/bootstrap-custom.less"
                },
                options: {
                    cleancss: true,
                    paths: ["library/less/"]
                }
            }
        },
        watch: {
            css: {
                files: 'library/less/*.less',
                tasks: ['less'],
            }
        }
    });

    grunt.registerTask('build', [
        'watch'
    ]);

    grunt.registerTask('default', ['build']);
};
