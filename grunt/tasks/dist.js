module.exports = function(grunt) {
  grunt.registerTask('dist', ['htmlcompressor','cssmin']);
  grunt.log.writeln('Thanks for using Aarons build, you are running "Dist" task.');
};
