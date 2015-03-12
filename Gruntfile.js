module.exports = function(grunt) {

    // Configuration
    grunt.initConfig({

        pkg: grunt.file.readJSON('package.json'),

        /**
         * The directories to delete when `grunt clean` is executed.
         */
        clean: {
            css: [
                'assets/css'
            ],
            js: [
                'assets/js'
            ]
        },

        concat: {
            dist: {
                src: [
                    'dev/js/libs/angular.js',
                    'dev/js/libs/angular-sanitize.js',
                    'dev/js/libs/firebase.js',
                    'dev/js/libs/angular-fire.js',
                    'dev/js/libs/angular-geolocation.js',
                    //'dev/js/libs/angular-touch.js',
                    //'dev/js/libs/angular-animate.js',
                    //'dev/js/libs/angular-messages.js',
                    'dev/js/libs/modernizr.js',
                    'dev/js/app.js',
                    'dev/js/services/*.js',
                    'dev/js/directives/*.js',
                    'dev/modules/**/*.js'
                ],
                dest: 'assets/js/main.js',
            }
        },

        uglify: {
            build: {
                src: 'assets/js/main.js',
                dest: 'assets/js/main.min.js',
            }
        },

        compass: {
            dist: {
                options: {
                    sassDir: 'dev/sass',
                    cssDir: 'assets/css',
                    environment: 'development'
                }
            }
        },

        watch: {
            scripts: {
                files: [
                    'dev/js/**/*.js',
                    'dev/modules/**/*.js'
                ],
                tasks: ['concat', 'uglify'],
                options: {
                    spawn: false
                }
            },
            css: {
                files: [
                    'dev/sass/**/*.scss',
                    'dev/modules/**/*.scss'
                ],
                tasks: ['clean:css', 'compass'],
                options: {
                    //spawn: false
                }
            },
            livereload: {
                options: {
                    livereload: true
                },
                files: [
                    'dev/modules/**/*.html',
                    'dev/js/**/*.js',
                    'dev/sass/**/*.scss',
                    'assets/**/*'
                ]
            },
            html: {
                files: [
                    'dev/modules/**/*.html'
                ],
                tasks: ['copy']
            }
        },

        copy: {
            main: {
                expand: true, 
                flatten: true,
                cwd: 'dev/modules', 
                src: [
                    '**/*.html'
                    ], 
                dest: 'includes/', 
                filter: 'isFile'
            }
        },
  

        karma: {
            unit: {
                configFile: 'karma.conf.js'
            }
        },

        express: {
            options: {
                // Override defaults here
            },
            dev: {
                options: {
                    script: 'server.js'
                }
            }
        }



    });

    // Where we tell Grunt we plan to use plugins.
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-compass');
    grunt.loadNpmTasks('grunt-express-server');
    grunt.loadNpmTasks('grunt-karma');
    grunt.loadNpmTasks('grunt-contrib-copy');

    // Where we tell Grunt what to do when we type "grunt" into the terminal.
    grunt.registerTask('default', ['concat', 'uglify', 'compass', 'express', 'watch', 'copy']);

};