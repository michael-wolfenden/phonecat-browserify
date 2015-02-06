'use strict';

var gulp        = require('gulp'),
    browserify  = require('browserify'),
    ngannotate  = require('browserify-ngannotate'),
    brfshtmlmin = require('brfs-htmlmin'),
    rev         = require('gulp-rev'),
    source      = require('vinyl-source-stream'),
    gutil       = require('gulp-util'),
    buffer      = require('gulp-buffer'),
    uglify      = require('gulp-uglify'),
    config      = require('../../configuration').scripts;

gulp.task('_scripts:production', function (callback) {

    var bundleQueue = config.bundles.length;
    config.bundles.forEach(browserfyBundle);

    function browserfyBundle(bundleConfiguration) {
        var bundler = browserify({
            entries: bundleConfiguration.sourceFile,
            debug: false
        });

        bundleConfiguration.externals.forEach(function (external) {
            bundler.external(external);
        });

        bundleConfiguration.requires.forEach(function (require) {
            bundler.require(require);
        });

        // apply transforms
        bundler.transform(ngannotate);
        bundler.transform(brfshtmlmin);

        var bundle = function () {
            gutil.log('Bundling', gutil.colors.green(bundleConfiguration.destinationFile));

            return bundler
                .bundle()
                // Use vinyl-source-stream to make the
                // stream gulp compatible. Specifiy the
                // desired output filename here.
                .pipe(source(bundleConfiguration.destinationFile))
                .pipe(buffer())
                .pipe(uglify())
                .pipe(rev())
                .pipe(gulp.dest(bundleConfiguration.destinationPath))
                .on('end', reportFinished);
        };

        var reportFinished = function () {
            gutil.log('Bundled', gutil.colors.green(bundleConfiguration.destinationFile));

            if (bundleQueue) {
                bundleQueue = bundleQueue - 1;
                if (bundleQueue === 0) {
                    // If queue is empty, tell gulp the task is complete.
                    // https://github.com/gulpjs/gulp/blob/master/docs/API.md#accept-a-callback
                    callback();
                }
            }
        };

        return bundle();
    }
});