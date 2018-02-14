var gulp = require('gulp');
var sass = require('gulp-sass');
var cssnano = require('gulp-cssnano');
var autoprefixer = require('gulp-autoprefixer');
var rename = require('gulp-rename');
var stylelint = require('gulp-stylelint');

gulp.task('default', ['build', 'docs', 'watch']);
gulp.task('build', ['css', 'normalize']);

gulp.task('css', function () {
  return gulp.src('src/bluprint.scss')
    .pipe(sass({precision: 8, outputStyle: 'expanded'}))
    .pipe(autoprefixer({browsers: ['> 2%', 'last 2 versions', 'ie >= 8']}))
    .pipe(gulp.dest('dist/'))
    .pipe(cssnano())
    .pipe(rename({suffix: '.min'}))
    .pipe(gulp.dest('dist/'));
});

gulp.task('normalize', function () {
  return gulp.src('node_modules/normalize.css/normalize.css')
    .pipe(cssnano())
    .pipe(rename({suffix: '.min'}))
    .pipe(gulp.dest('dist'));
});

gulp.task('docs', function () {
  return gulp.src('docs/scss/demo.scss')
    .pipe(sass())
    .pipe(autoprefixer({browsers: ['> 2%', 'last 2 versions', 'ie >= 8']}))
    .pipe(gulp.dest('docs/css/'))
    .pipe(cssnano())
    .pipe(rename({suffix: '.min'}))
    .pipe(gulp.dest('docs/css/'));
});

gulp.task('test', function () {
  return gulp.src('dist/bluprint.*')
    .pipe(stylelint({reporters: [{formatter: 'string', console: true}]}));
});

gulp.task('watch', function () {
  gulp.watch(['src/**/*.scss', 'docs/scss/**/*.scss'], ['build', 'docs']);
});
