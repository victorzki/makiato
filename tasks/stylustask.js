var stylus = require('gulp-stylus'),
    gulp = require('gulp'),
    paths = require('./paths');

module.exports = function() {
  return gulp.src(paths.client.style)
      .pipe(stylus({
        compress: true
      }))
      .pipe(gulp.dest(paths.build.public.style));
};
