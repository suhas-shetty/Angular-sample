module.exports = function(grunt){
	grunt.loadNpmTasks('grunt-wiredep');
	grunt.loadNpmTasks('grunt-contrib-watch');

	grunt.initConfig({
		wiredep: {
			task: {
				src: ['index.html']
			}
		},
		watch: {
			bowerdep:{
				files: ['scripts/bower_components/**/*'],
				tasks: ['wiredep']
			}
		}
	});
	grunt.registerTask('default', ['watch']);
};