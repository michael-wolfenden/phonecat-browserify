'use strict';

var gulp         = require('gulp');
var less         = require('gulp-less');
var sourcemaps   = require('gulp-sourcemaps');
var autoprefixer = require('gulp-autoprefixer');
var gutil        = require('gulp-util');
var config       = require('../../configuration').css;

module.exports = gulp.task('_css', function () {
    return gulp.src(config.sourceFile)
        .pipe(sourcemaps.init())
        .pipe(less().on('error', gutil.log))
        .pipe(autoprefixer(config.autoprefixerConfiguration))
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest(config.destinationPath));
});