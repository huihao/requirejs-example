var gulp = require('gulp');
var sass = require('gulp-ruby-sass');
var sourcemaps = require('gulp-sourcemaps');
var autoprefixer = require('gulp-autoprefixer');
var imagemin = require('gulp-imagemin');
var del = require('del');
var connect = require('gulp-connect');
var jshint = require('gulp-jshint');
var compass = require('gulp-compass');
var replace=require('gulp-replace');
var minifyCSS = require('gulp-minify-css');
var rjs=require('requirejs');

var paths = {
            root: './',
            build: {
                root: 'build/',
                styles: 'build/css/',
                scripts: 'build/js/',
                images:'build/img/'
            },
            dist: {
                root: 'dist/',
                styles: 'dist/css/',
                scripts: 'dist/js/',
                images:'dist/img/'
            },
            source: {
                root: 'src/*.html',
                styles: 'src/scss/',
                scripts: 'src/js/*.js',
                images:'src/img/**/*.{png,jpg,gif,ico}'
            },
        }

gulp.task('clean', function(cb) {
   del(['templates/make/*.html'], function (err, paths) {
      console.log('Deleted files/folders:\n', paths.join('\n'));
    });
   var emptyStream = gulp.src([]).pipe(gulp.dest('/'));
  return emptyStream;
});

gulp.task('connect', function () {
    connect.server({
        root: '',
        port:'6020',
        livereload: true
    });
});

gulp.task('html', function () {
    return gulp.src(paths.source.root)
        .pipe(gulp.dest(paths.build.root))
        .pipe(connect.reload());
});

gulp.task('compass',  function() {
  gulp.src("src/scss/**/*.scss")
    .pipe(compass({
      css: paths.build.styles,
      sass: paths.source.styles,
      project:__dirname,
      import_path:['bower_components/breakpoint-sass/stylesheets/','bower_components/susy/sass'],
      requre:['breakpoint','susy'],
      sourcemap: false
    }))
    .on('error', function(error) {
      console.log(error);
    })
    .pipe(autoprefixer({
          browsers: ['last 2 versions','Firefox >= 20'],
          cascade: false
      }))
    .pipe(gulp.dest(paths.build.styles))
    .on('error', function(error) {
      console.log(error);
    })
    .pipe(connect.reload());
});

gulp.task('script',  function () {
    return gulp.src(paths.source.scripts)
        .pipe(jshint())
        .pipe(jshint.reporter('default'))
        .pipe(gulp.dest(paths.build.scripts))
        .pipe(connect.reload());
});


gulp.task('images',  function() {
  return gulp.src(paths.source.images)
    .pipe(imagemin({optimizationLevel: 5}))
    .on('error', function (err) {
      console.error('Error!', err.message);
   })
    .pipe(gulp.dest(paths.build.images))
    .pipe(connect.reload());
});

gulp.task('watch', function () {
    gulp.watch("src/scss/**/*", ['compass']);
    gulp.watch(paths.source.images, ['images']);
    gulp.watch(paths.source.scripts, ['script']);
    gulp.watch(paths.source.root, ['html']);
});

gulp.task('build', function(cb){
  rjs.optimize({
    appDir: 'src',
    baseUrl: 'js/lib',
    paths: {
      app: '../app'

    },
    dir: 'www-build',
     stubModules: ['jsx', 'text', 'JSXTransformer'],
    modules: [
       //Optimize the application files. jQuery is not
       //included since it is already in require-jquery.js
       {
           name: "../main"
       }
   ]
  }, function(buildResponse){
    cb();
  }, cb);
});



gulp.task('default', ['connect', 'images', 'compass', 'watch', "script","html"]);
