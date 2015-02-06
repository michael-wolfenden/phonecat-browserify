'use strict';

var gulp    = require('gulp'),
    replace = require('gulp-replace'),
    glob    = require('glob'),
    path    = require('path'),
    gutil   = require('gulp-util'),
    _       = require('lodash'),
    config  = require('../../configuration').index;

gulp.task('_index:production', function () {
    return gulp.src(config.sourceFile)
        .pipe(replace(config.regexOfReferencesToReplace, getRevisionedFilename))
        .pipe(gulp.dest(config.destinationPath));

    // app.css -> app-43e69050.css
    function getRevisionedFilename(originalFilename) {
        var searchGlob = getSearchGlobForFilename(originalFilename);
        var revisionedFilename = _(glob.sync(searchGlob))
            .map(path.basename)
            .first();

        gutil.log('Replacing', gutil.colors.green(originalFilename + ' -> ' + revisionedFilename));

        return revisionedFilename;
    }

    function getSearchGlobForFilename(filename) {
        // app.css -> './dest/**/app*css
        var fileGlob = filename.replace('.', '*');
        var directoryGlob = config.destinationPath + '/**/' + fileGlob;

        return directoryGlob;
    }
});