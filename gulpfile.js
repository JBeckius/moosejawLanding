'use strict';

var gulp = require('gulp');
var sass = require('gulp-sass');
var concat = require('gulp-concat');
var stripDebug = require('gulp-strip-debug');
var uglify = require('gulp-uglify');
var autoprefix = require('gulp-autoprefixer');
var cleanCSS = require('gulp-clean-css');
var connect = require('gulp-connect');
var jshint = require('gulp-jshint');
var stylish = require('jshint-stylish');
var browserSync = require('browser-sync').create();
var changed = require('gulp-changed');
var imagemin = require('gulp-imagemin');
var htmlmin = require('gulp-htmlmin');

//browsersync for simple html
gulp.task('serve', ['sass'], function() {

    browserSync.init({
        server: {
          baseDir: "./"
        }
    });

    gulp.watch("./assets/build/*").on('change', browserSync.reload);
});

//Nodemon for express builds
// gulp.task('start', function () {
//   nodemon({
//     script: 'server.js'
//   , ext: 'js html'
//   , env: { 'NODE_ENV': 'development' }
// });
// });

// gulp.task('connect', function() {
//   connect.server();
// });

//Minify new or existing html
gulp.task('minify', function() {
  return gulp.src('./*.html')
    .pipe(htmlmin({collapseWhitespace: true}))
    .pipe(gulp.dest('./assets/build'));
});


//Process sass into css
gulp.task('sass', function () {
  return gulp.src('./assets/scss/**/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./assets/css/'));
});

// minify new images
gulp.task('imagemin', function() {
  var imgSrc = './assets/img/**/*',
      imgDst = './assets/build/img';

  gulp.src(imgSrc)
    .pipe(changed(imgDst))
    .pipe(imagemin())
    .pipe(gulp.dest(imgDst));
});


// JS concat, strip debugging and minify
gulp.task('scripts', function() {
  gulp.src(['./assets/js/**/*.js','./js/**/*.js'])
    .pipe(concat('script.js'))
    .pipe(stripDebug())
    .pipe(uglify())
    .pipe(gulp.dest('./assets/build/'));
});

// JSHint checks code for errors
gulp.task('lint', function() {
  return gulp.src('./assets/js/**/*.js')
    .pipe(jshint())
    .pipe(jshint.reporter(stylish));
});

// CSS concat, auto-prefix and minify
gulp.task('styles', function() {
  gulp.src(['./assets/css/**/*.css'])
    .pipe(concat('styles.css'))
    .pipe(autoprefix('last 2 versions'))
    .pipe(cleanCSS({compatibility: 'ie8'}))
    .pipe(gulp.dest('./assets/build/'))
    .pipe(browserSync.stream());
});

gulp.task('default', ['serve','imagemin', 'minify',
//'start',
'lint','sass', 'scripts', 'styles'], function() {

});
gulp.watch('./*.html', ['minify']);
gulp.watch('./assets/css/**/*.css', ['styles']);
gulp.watch('./assets/scss/**/*.scss', ['sass']);

gulp.watch('./assets/js/**/*.js', ['lint', 'scripts']);
