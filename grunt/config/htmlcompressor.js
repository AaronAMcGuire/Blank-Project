module.exports = {
  htmlcompressor: {
    compile: {
      files: {
        'dist/index.html': 'src/index.html'
      },
      options: {
        type: 'html',
        preserveServerScript: true
      }
    }
  }
};
