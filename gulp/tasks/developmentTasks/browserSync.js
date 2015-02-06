'use strict';

var gulp        = require('gulp'),
    browserSync = require('browser-sync'),
    config      = require('../../configuration').browserSync;

gulp.task('_browserSync', ['_build'], function () {
    browserSync(config);
});