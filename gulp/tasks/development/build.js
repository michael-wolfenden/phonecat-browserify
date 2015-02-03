'use strict';

var gulp        = require('gulp'),
    runSequence = require('run-sequence');

gulp.task('_build', function (callback) {
    runSequence('_delete', [
        '_lint',
        '_css',
        '_scripts',
        '_index',
        '_images',
        '_assets'
    ],
     callback);
});