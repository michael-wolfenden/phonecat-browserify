'use strict';

var gulp    = require('gulp'),
    jshint  = require('gulp-jshint'),
    stylish = require('jshint-stylish'),
    config  = require('../../configuration').lint;

gulp.task('_lint', function () {
    return gulp.src(config.sourceFiles)
        .pipe(jshint())
        .pipe(jshint.reporter(stylish, {verbose: true}));
});