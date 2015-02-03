'use strict';

var gulp        = require('gulp'),
    browserSync = require('browser-sync'),
    reload      = browserSync.reload,
    browserify  = require('browserify'),
    ngannotate  = require('browserify-ngannotate'),
    brfs        = require('brfs'),
    source      = require('vinyl-source-stream'),
    watchify    = require('watchify'),
    gutil       = require('gulp-util'),
    config      = require('../../configuration').scripts;

gulp.task('_scripts', function (callback) {

    var bundleQueue = config.bundles.length;
    config.bundles.forEach(browserfyBundle);

    function browserfyBundle(bundleConfiguration) {
        var bundler = browserify({
            // Required watchify args
            cache: {}, packageCache: {}, fullPaths: false,
            entries: bundleConfiguration.sourceFile,
            debug: bundleConfiguration.sourcemaps
        });

        bundleConfiguration.externals.forEach(function (external) {
            bundler.external(external);
        });

        bundleConfiguration.requires.forEach(function (require) {
            bundler.require(require);
        });

        bundleConfiguration.transforms.forEach(function (transform) {
            bundler.transform(transform);
        });

        var bundle = function () {
            gutil.log('Bundling', gutil.colors.green(bundleConfiguration.destinationFile));

            return bundler
                .bundle()
                .on('error', gutil.log)
                // Use vinyl-source-stream to make the
                // stream gulp compatible. Specifiy the
                // desired output filename here.
                .pipe(source(bundleConfiguration.destinationFile))
                // Specify the output destination
                .pipe(gulp.dest(bundleConfiguration.destinationPath))
                .on('end', reportFinished);
        };

        if (bundleConfiguration.watch) {
            // Wrap with watchify and rebundle on changes
            bundler = watchify(bundler);
            // Rebundle on update
            bundler.on('update', bundle);
        }

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

            reload();
        };

        return bundle();
    }
});