var gulp = require('gulp')
var sourcemaps = require('gulp-sourcemaps')
var sass = require('gulp-sass')
var rename = require('gulp-rename')
var rtlcss = require('gulp-rtlcss')
var cleanCss = require('gulp-clean-css')

gulp.task('build-css', () => {
  return gulp.src('./src/scss/main.scss')
    .pipe(sourcemaps.init())
    .pipe(sass())
    .pipe(sourcemaps.write())
    // .pipe(cleanCss())
    .pipe(gulp.dest('./public/'))
})

gulp.task('build-rtlcss', () => {
  return gulp.src('./src/scss/main.scss')
    .pipe(sourcemaps.init())
    .pipe(sass())
    .pipe(sourcemaps.write())
    .pipe(rtlcss())
    // .pipe(cleanCss())
    .pipe(rename({
      suffix: '-rtl'
    }))
    .pipe(gulp.dest('./public/'))
})

gulp.task('rtlcss', () => {
  return gulp.src('./src/scss/main.scss')
    .pipe(sourcemaps.init())
    .pipe(sass())
    .pipe(sourcemaps.write())
    .pipe(rtlcss())
    .pipe(rename({
      suffix: '-rtl'
    }))
    .pipe(gulp.dest('./src/scss/'))
})

gulp.task('build', ['build-css', 'build-rtlcss'])