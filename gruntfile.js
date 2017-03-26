module.exports = function(grunt) {
  var path = require('path');

  require('load-grunt-config')(grunt, {
    configPath: path.join(process.cwd(), 'grunt/config'),
    jitGrunt: {
      customTasksDir: 'grunt/tasks',
      staticMappings:{
            sass: 'sass_compile_imports'
        }
    },
    data: {
      foo: 'bar' // accessible with '<%= foo %>'
    }
  });
};
