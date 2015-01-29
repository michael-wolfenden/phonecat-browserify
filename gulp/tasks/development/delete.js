'use strict';

var gulp   = require('gulp');
var del    = require('del');
var config = require('../../configuration').delete;

gulp.task('_delete', function(callback) {
  del(config.destinationPath, callback);
});
