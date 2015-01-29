'use strict';

var gulp   = require('gulp');
var config = require('../../configuration').index;

gulp.task('_index', function () {
    return gulp.src(config.sourceFile)
        .pipe(gulp.dest(config.destinationPath));
});