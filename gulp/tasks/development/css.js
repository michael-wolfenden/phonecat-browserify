'use strict';

var gulp         = require('gulp'),
    less         = require('gulp-less'),
    sourcemaps   = require('gulp-sourcemaps'),
    autoprefixer = require('gulp-autoprefixer'),
    gutil        = require('gulp-util'),
    config       = require('../../configuration').css;

module.exports = gulp.task('_css', function () {
    return gulp.src(config.sourceFile)
        .pipe(sourcemaps.init())
        .pipe(less().on('error', gutil.log))
        .pipe(autoprefixer(config.autoprefixerConfiguration))
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest(config.destinationPath));
});