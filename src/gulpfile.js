var gulp = require('gulp'),
    htmlmin = require('gulp-htmlmin'),
    rename = require('gulp-rename'),
    minifyInline = require('gulp-minify-inline'),
    uglify = require('gulp-uglify'),
    cleancss = require('gulp-clean-css');

gulp.task('minify', function() {
  gulp.src('./*.html')
    .pipe(htmlmin({collapseWhitespace: true}))
    .pipe(minifyInline())
    .pipe(gulp.dest('../dist/'));

  gulp.src('./css/*.css')
    .pipe(cleancss({compatibility: 'ie8'}))
    .pipe(gulp.dest('../dist/css/'));

  gulp.src('./js/*.js')
    .pipe(uglify())
    .pipe(gulp.dest('../dist/js/'));

  gulp.src('./views/*.html')
    .pipe(htmlmin({collapseWhitespace: true}))
    .pipe(minifyInline())
    .pipe(gulp.dest('../dist/views/'));

  gulp.src('./views/css/*.css')
    .pipe(cleancss({compatibility: 'ie8'}))
    .pipe(gulp.dest('../dist/views/css/'));

  gulp.src('./views/js/*.js')
    .pipe(uglify())
    .pipe(gulp.dest('../dist/views/js/'));
});

gulp.task('default', ['minify']);
