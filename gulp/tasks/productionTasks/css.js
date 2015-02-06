'use strict';

var gulp         = require('gulp'),
    less         = require('gulp-less'),
    autoprefixer = require('gulp-autoprefixer'),
    rev          = require('gulp-rev'),
    minifycss    = require('gulp-minify-css'),
    config       = require('../../configuration').css;

module.exports = gulp.task('_css:production', function () {
    return gulp.src(config.sourceFile)
        .pipe(less())
        .pipe(autoprefixer(config.autoprefixerConfiguration))
        .pipe(minifycss())
        .pipe(rev())
        .pipe(gulp.dest(config.destinationPath));
});