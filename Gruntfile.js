module.exports = function(grunt){
	grunt.loadNpmTasks('grunt-wiredep');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-banner');
	grunt.loadNpmTasks('grunt-sass');

	grunt.initConfig({
		wiredep: {
			task: {
				src: ['index.html']
			}
		},
		jsBanner: '/** \n'+ 
				' * Project          : Angular Sample \n'+
				' * Module           :  \n'+
				' * Source filename  : .js \n'+
				' * Description      :  \n'+
				' * Author           : Suhas <suhas.shetty@robosoftin.com> \n'+
				' * Copyright        : Copyright © 2016 \n'+ 
				' *                    Written under contract by Robosoft Technologies Pvt. Ltd.\n'+
				' */\n',

		cssBanner: '/** \n'+ 
				' * Project          : Angular Sample \n'+
				' * Source filename  : .css \n'+
				' * Description      :  \n'+
				' * Author           : Suhas <suhas.shetty@robosoftin.com> \n'+
				' * Copyright        : Copyright © 2016 \n'+ 
				' *                    Written under contract by Robosoft Technologies Pvt. Ltd.\n'+
				' */\n',

		htmlBanner: '<!-- \n'+ 
				' * Project          : Angular Sample \n'+
				' * Template         :  \n'+
				' * Source filename  : .html \n'+
				' * Description      :  \n'+
				' * Author           : Suhas <suhas.shetty@robosoftin.com> \n'+
				' * Copyright        : Copyright © 2016 \n'+ 
				' *                    Written under contract by Robosoft Technologies Pvt. Ltd.\n'+
				' -->\n',

		usebanner: {
			js:{
				options:{
					position: 'top',
					banner: '<%= jsBanner %>'
				},
				files:{
					src: ['./app/**/*.js']
				}
			},
			css:{
				options:{
					position: 'top',
					banner: '<%= cssBanner %>'
				},
				files:{
					src: ['./content/css/*.css']
				}
			},
			html:{
				options:{
					position: 'top',
					banner: '<%= htmlBanner %>'
				},
				files:{
					src: ['./app/**/*.html']
				}
			}
		},
		sass: {
			options : {
				sourceMap: true,
				outputStyle: 'expanded'
			},
			dist: {
				files: {
					'./content/css/app.css' : './content/sass/app.scss',
					'./content/css/home.css' : './content/sass/home.scss'
				}
			}
		},
		watch: {
			bowerdep: {
				files: ['scripts/bower_components/**/*'],
				tasks: ['wiredep']
			},
			sass: {
				files: ['./content/sass/*.scss'],
				tasks: ['sass:dist']
			}
		}
	});
	grunt.registerTask('banner', ['usebanner']);
	grunt.registerTask('default', ['sass:dist', 'watch']);
};