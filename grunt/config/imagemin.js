module.exports = {
  imagemin: {                          // Task
static: {                          // Target
options: {                       // Target options
  optimizationLevel: 3,
  svgoPlugins: [{ removeViewBox: false }]
}
},
dynamic: {                         // Another target
files: [{
  expand: true,                  // Enable dynamic expansion
  cwd: 'Images/',                   // Src matches are relative to this path
  src: ['**/*.{png,jpg,gif}'],   // Actual patterns to match
  dest: 'Images/'                  // Destination path prefix
}]
}
}
};
