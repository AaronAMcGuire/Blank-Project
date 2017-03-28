module.exports = {
  browserSync: {
      dev: {
          bsFiles: {
              src: [
                  'dist/Styles/Sass/*.css',
                  '*.html'
              ]
          },
          options: {
              watchTask: false,
              proxy: "blank-project.dev"
          }
      }
  }
};
