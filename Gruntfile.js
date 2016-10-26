module.exports = function( grunt ) {

	/**
	 * Because I was not expecting myself to work on this project for long
	 * I've not configured grunt completely, all I cared about was SASS
	 * and livereload provided by grunt-contrib-watch.
	 *
	 * If I was to setup my workflow properly I'd take care of:
	 * 		- versioning css (to prevent my browser from caching it during development)
	 * 		- I'd make use of babel and ES6
	 * 		- jslint would be in place
	 * 		- images optimization
	 * 		- concatenation of libraries (from bower_components directory)
	 * 		- and few more...
	 *
	 * For now I just copied and pasted the libs I used in the project.
	 */

	// Load grunt tasks
	grunt.loadNpmTasks( 'grunt-contrib-sass' );
	grunt.loadNpmTasks( 'grunt-contrib-uglify' );
	grunt.loadNpmTasks( 'grunt-contrib-watch' );

	grunt.initConfig({
		pkg: grunt.file.readJSON( 'package.json' ),

		sass: {
			dist: {
				files: {
					'src/css/main.css' : 'src/sass/main.scss'
				}
			}
		},

		watch: {
			options: {
			      livereload: true
		    },
			css: {
				files: '**/*.scss',
				tasks: ['sass']
			},
			html: {
				files: 'src/**/index.html'
			}
		}
	});

	grunt.registerTask( 'default', ['watch'] );
}