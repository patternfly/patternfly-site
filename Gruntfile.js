module.exports = function(grunt) {
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
    csscount: {
      production: {
        src: ['library/css/patternfly-*.min.css'],
        options: {
          maxSelectors: 4096
        }
      }
    },
    cssmin: {
      production: {
        files: [{
          expand: true,
          cwd: 'library/css',
          src: ['patternfly-*.css', '!*.min.css'],
          dest: 'library/css',
          ext: '.min.css',
        }],
        options: {
          sourceMap: true
        }
      }
    },
    less: {
      patternflyAdjusted: {
        files: {
          'library/css/patternfly-adjusted.css': 'library/less/patternfly-adjusted.less',
        },
        options: {
          paths: ['less/'],
          sourceMap: true,
          outputSourceFiles: true,
          sourceMapFilename: 'library/css/patternfly-adjusted.css.map',
          sourceMapURL: 'patternfly-adjusted.css.map'
        }
      },
      patternflySite: {
        files: {
          'library/css/patternfly-site.css': 'library/less/patternfly-site.less',
        },
        options: {
          paths: ['less/'],
          sourceMap: true,
          outputSourceFiles: true,
          sourceMapFilename: 'library/css/patternfly-site.css.map',
          sourceMapURL: 'patternfly-site.css.map'
        }
      }
    },
    watch: {
      css: {
        files: ['library/less/*.less', 'library/components/patternfly/less/*.less'],
        tasks: ['less', 'cssmin', 'csscount'],
      }
    }
  });
  grunt.registerTask('build', ['less', 'cssmin', 'csscount']);
  grunt.registerTask('server', ['build', 'watch']);
  grunt.registerTask('default', ['build']);
};