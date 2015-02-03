'use strict';

var gulp        = require('gulp'),
    browserSync = require('browser-sync'),
    config      = require('../../configuration').watch;

gulp.task('_watch', ['_browserSync'], function () {
    gulp.watch(config.css, ['_css', browserSync.reload]);
    gulp.watch(config.scripts, ['_lint', browserSync.reload]);
    gulp.watch(config.assets, ['_assets', browserSync.reload]);
    gulp.watch(config.images, ['_images', browserSync.reload]);
    gulp.watch(config.index, ['_index', browserSync.reload]);
});
