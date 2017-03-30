var gulp = require('gulp');

var del = require('del');
var runSequence = require('run-sequence');
var cache = require('gulp-cache');
var concat = require('gulp-concat');
var imagemin = require('gulp-imagemin');
var sass = require('gulp-sass');
var sourcemaps = require('gulp-sourcemaps');
var stripDebug = require('gulp-strip-debug');
var uglify = require('gulp-uglify');

var paths = {
  images: 'assets/img/**/*.+(png|jpg|gif|svg)',
  scripts: ['assets/js/vendor/vendor.js',
  
            'assets/js/snippets/smooth-scroll.js',
            
            'assets/js/modules/functions.js',
            'assets/js/modules/effects.js',
            'assets/js/modules/misc.js',
            
            'assets/js/initiate/initiate.js'],
  styles: 'assets/sass/*.scss',
  stylesWatch: 'assets/sass/**/*.scss',
};


gulp.task('scripts', function() {
  return gulp.src(paths.scripts)
    .pipe(uglify())
    .pipe(sourcemaps.init())
      .pipe(stripDebug())
      .pipe(concat('main.js'))
    .pipe(sourcemaps.write('maps'))
    .pipe(gulp.dest('public/js'));
});

// Compile Sass into CSS
gulp.task('styles', function() {
  return gulp.src(paths.styles)
    .pipe(sourcemaps.init())
      .pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
    .pipe(sourcemaps.write('maps'))
    .pipe(gulp.dest('public/css'));
});

// Optimize images
gulp.task('images', function() {
  return gulp.src(paths.images)
    .pipe(cache(imagemin({ optimizationLevel: 5, progressive: true, interlaced: true })))
    .pipe(gulp.dest('public/img'));
});

// Clean build directory
gulp.task('clean', function() {
  return del.sync(['public/css', 'public/js', 'public/img']);
});

// Clear image cache
gulp.task('cache:clear', function (callback) {
  return cache.clearAll(callback);
});

// Watch files
gulp.task('watch', function() {
  gulp.watch(paths.scripts, ['scripts']);
  gulp.watch(paths.stylesWatch, ['styles']);
  gulp.watch(paths.images, ['images']);
});

// Build
gulp.task('build', function (callback) {
  runSequence('clean', 
    ['scripts', 'styles', 'images'],
    callback
  );
});
 
 // Default Task
gulp.task('default', function(callback) {
  runSequence(['scripts', 'styles'], 'watch',
    callback
  );
});
