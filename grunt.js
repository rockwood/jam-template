/*global module:false*/
module.exports = function(grunt) {

  grunt.loadNpmTasks('grunt-imagine');
  grunt.loadNpmTasks('grunt-coffee');
  grunt.loadNpmTasks('grunt-less');
  grunt.loadNpmTasks('grunt-jam');
  grunt.loadTasks('tasks');

  var output_directory = 'dist/';
  var main_stylesheet = 'app/stylesheets/_main.less';
  var homepage_template = 'app/templates/homepage.handlebars';

  // Project configuration.
  grunt.initConfig({

    // convert the homepage handelbars
    template: {
      dev: {
        src: homepage_template,
        dest: 'index.html',
        variables: {
          css: 'dist/css/app.css',
          js: 'jam/require.js',
          title: 'Pampers | Dev Build'
        }
      },
      comp: {
        src: homepage_template,
        dest: 'comp/template.html',
        variables: {
          css: '/dist/css/app.css',
          js: '/dist/js/app.js',
          title: 'Pampers | Comp'
        }
      },
      dist: {
        src: homepage_template,
        dest: output_directory + 'index.html',
        variables: {
          css: './css/app.min.css',
          js: './js/app.min.js',
          title: 'Pampers'
        }
      }
    },

    // compile .coffee files to adjacent .js files
    coffee: {
      dev: {
        src: ['app/**/*.coffee', 'test/**/*.coffee' ],
        options: {
          bare: true // Compile the JavaScript without the top-level function safety wrapper.
        }
      }
    },

    // Optimize img
    pngmin: {
      src: ['img/**/*.png'],
      dest: output_directory + 'img'
    },

    jpgmin: {
      src: ['img/**/*.jpg'],
      dest: output_directory + 'img'
    },

    // Compile all dependencies and app code
    jam: {
      dev: {
        src: ['app/init.js'],
        dest: output_directory + 'js/app.js',
        options: {
          nominify: true
        }
      },
      dist: {
        src: ['app/init.js'],
        dest: output_directory + 'js/app.min.js'
      }
    },

    // Convert less to css
    less: {
      dev: {
        src: [main_stylesheet],
        dest: output_directory + 'css/app.css'
      },
      dist: {
        src: [main_stylesheet],
        dest: output_directory + 'css/app.min.css',
        options: {
          compress: true
        }
      }
    },

    watch: {
      coffee: {
        files: '<config:coffee.dev.src>',
        tasks: 'coffee'
      },
      less: {
        files: ['app/stylesheets/**/*.less'],
        tasks: 'less'
      },
      template: {
        files: [homepage_template],
        tasks: 'template'
      }
    }
  });

  grunt.registerTask('build', 'template coffee jam less pngmin jpgmin');
  grunt.registerTask('run', 'server watch');

  grunt.registerTask('default', 'build run');
};
