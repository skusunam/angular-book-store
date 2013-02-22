module.exports = function (grunt) {

  grunt.initConfig({
      server: {
         port: 3000,
         base: '.'
      },

      watch:{
        files:['app/css/*.*', 'app/js/*.js', 'app/templates/*.html', 'img/*.*', 'index.html']
      }
  });

  grunt.registerTask('default', 'server watch');
};