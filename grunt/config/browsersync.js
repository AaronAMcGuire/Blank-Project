module.exports = {
  browserSync: {
      dev: {
          bsFiles: {
              src: [
                  'Styles/Sass/*.css',
                  '*.html'
              ]
          },
          options: {
              watchTask: true,
              server: './blank',
              proxy: "blank-project.dev"
          }
      }
  }
};
