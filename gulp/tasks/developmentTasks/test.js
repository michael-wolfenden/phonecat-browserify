'use strict';

var gulp   = require('gulp'),
    karma  = require('gulp-karma'),
    config = require('../../configuration').test;

gulp.task('_test', function () {

    // Nonsensical source to fall back to files listed in karma.conf.js,
    // see https://github.com/lazd/gulp-karma/issues/9
    return gulp.src('./thisdoesntexist')
        .pipe(karma({
            configFile: config.karmaFile,
            action: 'watch'
        }));

});