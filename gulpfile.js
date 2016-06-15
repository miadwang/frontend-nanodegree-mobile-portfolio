var gulp = require('gulp'),
    htmlmin = require('gulp-htmlmin'),
    rename = require('gulp-rename'),
    minifyInline = require('gulp-minify-inline');

gulp.task('minify', function() {
  return gulp.src('./index-src.html')
    .pipe(htmlmin({collapseWhitespace: true}))
    .pipe(minifyInline())
    .pipe(rename('index.html'))
    .pipe(gulp.dest('./'))
});

gulp.task('default', ['minify']);
