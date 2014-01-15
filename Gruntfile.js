module.exports = function (grunt) {
    // load all grunt tasks
    require('matchdep').filterDev('grunt-*').forEach(grunt.loadNpmTasks);

    // configurable paths
    var projectConfig = {
        src: '',
        dist: 'library'
    };

    try {
        projectConfig.src = require('./bower.json').appPath || projectConfig.src;
    } catch (e) {}

    grunt.initConfig({
        config: projectConfig,
        clean: {
            build: '<%= config.dist %>'
        },
        watch: {
            css: {
                files: 'library/less/*.less',
                tasks: ['less'],
            }
        },
        less: {
            development: {
                options: {
                    paths: ["library/less/"]
                },
                files: {
                    "library/css/bootstrap-custom.css": "library/less/bootstrap-custom.less"
                }
            },
            production: {
                options: {
                    paths: ["library/less/"],
                    cleancss: true
                },
                files: {
                    "library/css/bootstrap-custom.min.css": "library/less/bootstrap-custom.less"
                }
            }
        }
    });

    grunt.registerTask('build', [
        'watch'
    ]);

    grunt.registerTask('default', ['build']);
};
