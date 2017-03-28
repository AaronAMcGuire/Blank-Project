module.exports = {
cssmin: {
  options: {
    mergeIntoShorthands: false,
    roundingPrecision: -1
  },
  target: {
    files: {
      expand: true,
    cwd: 'blank-project/src/Styles',
    src: ['../src/*.css'],
    dest: 'dist/Styles/main.css'
    }
  }
}
};
