/*global module:false*/
module.exports = function(grunt) {

  grunt.loadNpmTasks('grunt-imagine');
  grunt.loadNpmTasks('grunt-coffee');
  grunt.loadNpmTasks('grunt-jam');
  grunt.loadNpmTasks('grunt-compass');
  grunt.loadNpmTasks('grunt-coffeepot');
  
  grunt.loadTasks('tasks');

  var output_directory = 'dist/';
  var main_stylesheet = 'app/stylesheets/_main.less';
  var homepage_template = 'app/templates/homepage.handlebars';

  // Project configuration.
  grunt.initConfig({

    // convert the homepage.handelbars template
    template: {
      dev: {
        src: homepage_template,
        dest: 'index.html',
        variables: {
          css: 'dist/css/all.min.css',
          js: 'jam/require.js',
          title: 'Jam Template | Dev Build'
        }
      },
      dist: {
        src: homepage_template,
        dest: output_directory + 'index.html',
        variables: {
          css: './dist/css/all.min.css',
          js: './js/app.min.js',
          title: 'Jam Template'
        }
      }
    },

    compass: {
      dev: {
        src: 'app/stylesheets',
        require: 'ZURB-foundation',
        dest: 'dist/css',
        images: 'img',
        outputstyle: 'expanded',
        linecomments: true,
        relativeassets: true,
        forcecompile: true
      },
      dist: {
        src: 'app/stylesheets',
        dest: 'dist/css',
        require: 'ZURB-foundation',
        outputstyle: 'compressed',
        images: 'dist/img',
        linecomments: false,
        relativeassets: true,
        forcecompile: true
      }
    },

    concat: {
      dist: {
        src: ['dist/css/app.css', 'dist/css/foundation.css'],
        dest: 'dist/css/all.min.css'
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

    watch: {
      compass: {
        files: ['app/stylesheets/**/*.scss'],
        tasks: 'compass:dev concat'
      },
      template: {
        files: [homepage_template],
        tasks: 'template'
      }
    }
  });

  grunt.registerTask('build', 'template coffee jam compass:dist concat pngmin jpgmin');
  grunt.registerTask('run', 'coffeepot watch');

  grunt.registerTask('default', 'build run');
};
