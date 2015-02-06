'use strict';

var gulp     = require('gulp'),
    imagemin = require('gulp-imagemin'),
    config   = require('../../configuration').images;

module.exports = gulp.task('_images', function () {
    return gulp.src(config.sourceFiles)
        .pipe(imagemin({
            optimizationLevel: 5,
            progressive: true,
            interlaced: true
        }))
        .pipe(gulp.dest(config.destinationPath));
});