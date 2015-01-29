'use strict';

var gulp = require('gulp');
var browserSync = require('browser-sync');
var config = require('../../configuration').browserSync;

gulp.task('_browserSync', ['_build'], function () {
    browserSync(config);
});