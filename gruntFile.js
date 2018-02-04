module.exports = function(grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
        uglify: {
    build: {
        src: 'public/scriptfile/button.js',
        dest: 'public/scriptfile/button.min.js'
    }
	},
	cssmin : {
			target : {
				src : ["public/stylesheet/style.css"],
				dest : "public/stylesheet/productionstyle.min.css"
			}
		}

    });

    // 3. Where we tell Grunt we plan to use this plug-in.
    // grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-cssmin');

    // 4. Where we tell Grunt what to do when we type "grunt" into the terminal.
    grunt.registerTask('default', ['uglify','cssmin']);

}

  