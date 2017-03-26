module.exports = {
  watch: {
      scripts: {
          files: ['**/*'],
          tasks: ['sass_compile_imports'],
          options: {
              spawn: false,
          },
      },
  }
};
