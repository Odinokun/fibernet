'use strict';

module.exports = function() {

  $.gulp.task('copy:js', function() {
    return $.gulp.src([
      'src/js/uncompressed.js',
      'src/js/search.js',
      'src/js/particlesjs-config-index.json',
      'src/js/particlesjs-config-inn.json'
    ])
      .pipe($.gulp.dest($.config.root + '/assets/js'))
  })

};
