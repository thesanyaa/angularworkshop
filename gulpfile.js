var gulp = require('gulp');
var gulpConcat = require('gulp-concat');

gulp.task('gulp-copy-libs' , function () {
  gulp.src('node_modules/angular/angular.min.js')
      .pipe(gulp.dest('www/lib'))
});

gulp.task('concat-libs', function () {
  gulp.src([
      'node_modules/whatwg-fetch/fetch.js',
      'node_modules/angular/angular.min.js'
  ]).pipe(gulpConcat('libs.js'))
      .pipe(gulp.dest('www/lib'));
});