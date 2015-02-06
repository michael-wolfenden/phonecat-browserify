'use strict';

var gulp   = require('gulp'),
    del    = require('del'),
    config = require('../../configuration').delete;

gulp.task('_delete', function (callback) {
    del(config.destinationPath, callback);
});
