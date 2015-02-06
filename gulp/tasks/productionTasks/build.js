'use strict';

var gulp        = require('gulp'),
    runSequence = require('run-sequence');

gulp.task('_build:production', function (callback) {
    runSequence(
        '_delete',
        '_test:production',
        [
            '_lint:production',
            '_css:production',
            '_scripts:production',
            '_images',
            '_assets'
        ],
        '_index:production',
        callback);
});