module.exports = function( grunt ) {

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