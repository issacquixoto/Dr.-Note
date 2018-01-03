module.exports = function(grunt) {
    require('time-grunt')(grunt);

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        sass: {
            dist: {
                options: {
                    outputStyle: "compressed",
                    imagePath: "../img/css"
                },
                files: {
                    'www/css/shared.min.css': 'scss/shared.scss'
                }
            }
        },
        uglify: {
            js: {
                files: {
                    'www/js/javascripts.min.js': 'js/**/*.js'
                }
            }
        },
        watch: {
            stylesheets: {
                files: ['scss/**/*.scss'],
                tasks: ['sass'],
                options: {
                    interrupt: true
                }
            },
            javascript: {
                files: ['js/**/*.js'],
                tasks: ['uglify'],
                options: {
                    interrupt: true
                }
            }
        }
    });

    grunt.registerTask('default', ['sass', 'uglify']);
    grunt.loadNpmTasks('grunt-sass');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-watch');
};