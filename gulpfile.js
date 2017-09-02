const gulp = require('gulp');
const concat = require('gulp-concat');
const browserSync = require('browser-sync').create();
const uglify = require('gulp-uglify');
const cleanCSS = require('gulp-clean-css');


const scripts = require('./src/config/gulp/scripts');
const styles = require('./src/config/gulp/styles');



var devMode = false;



gulp.task('concat-css', function() {
    gulp.src(styles)
        .pipe(concat('styles.min.css'))
        .pipe(gulp.dest('./environments/dev/'))
        .pipe(browserSync.reload({
            stream: true
        }));
});

gulp.task('concat-js', function() {
    gulp.src(scripts)
        .pipe(concat('scripts.min.js'))
        .pipe(gulp.dest('./environments/dev/'))
        .pipe(browserSync.reload({
            stream: true
        }));
});

gulp.task('html', function() {
    gulp.src('./src/index.html')
        .pipe(gulp.dest('./environments/dev/'))
        .pipe(browserSync.reload({
            stream: true
        }));
});

gulp.task('build', function() {
    gulp.start(['concat-css', 'concat-js', 'html']);
});


gulp.task('copy-templates', function() {
    gulp.src('./src/js/**/*.html')
        .pipe(gulp.dest('./environments/dev/templates/'));
});

gulp.task('browser-sync', function() {
    browserSync.init(null, {
        open: false,
        server: {
            baseDir: './environments/dev',
        }
    });
});

gulp.task('start', function() {
    devMode = true;
    gulp.start(['build', 'browser-sync']);
    gulp.watch(['./src/**/*.css'], ['concat-css']);
    gulp.watch(['./src/js/**/*.js'], ['concat-js']);
    gulp.watch(['./src/js/**/*.html'], ['copy-templates'])
    gulp.watch(['./src/index.html'], ['html']);
});
