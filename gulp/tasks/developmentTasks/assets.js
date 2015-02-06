'use strict';

var gulp   = require('gulp'),
    config = require('../../configuration').assets;

gulp.task('_assets', function () {
    return gulp.src(config.sourceFiles)
        .pipe(gulp.dest(config.destinationPath));
});