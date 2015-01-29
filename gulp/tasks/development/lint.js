'use strict';

var gulp    = require('gulp');
var jshint  = require('gulp-jshint');
var stylish = require('jshint-stylish');
var config  = require('../../configuration').lint;

gulp.task('_lint', function () {
    return gulp.src(config.sourceFiles)
        .pipe(jshint())
        .pipe(jshint.reporter(stylish));
});