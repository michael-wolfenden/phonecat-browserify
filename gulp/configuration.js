var sourcePath = './src';
var destinationPath = './dest';

var thirdPatyVendorsToBundleSeperately = [
    'jquery',
    'angular',
    'angular-animate',
    'angular-resource',
    'angular-route'
];

module.exports = {

    watch: {
        css:     sourcePath + '/styles/**/*',
        scripts: sourcePath + '/app/**/*.js',
        assets:  sourcePath + '/assets/**/*',
        images:  sourcePath + '/images/**/*',
        index:   sourcePath + '/index.html'
    },

    browserSync: {
        server: {
            baseDir: ['./dest']
        },
        port: 9999
    },

    delete: {
        destinationPath: [destinationPath]
    },

    css: {
        sourceFile: sourcePath + '/styles/app.less',
        destinationPath: destinationPath + '/css',
        autoprefixerConfiguration: {
            browsers: ['last 2 versions']
        }
    },

    scripts: {
        bundles: [{
            sourceFile: sourcePath + '/app/app.module',
            destinationFile: 'app.js',
            destinationPath: destinationPath + '/js',
            requires: [],
            externals: thirdPatyVendorsToBundleSeperately,
            transforms: ['browserify-ngannotate', 'brfs'],
            sourcemaps: true,
            watch: true
        }, {
            sourceFile: '',
            destinationFile: 'vendor.js',
            destinationPath: destinationPath + '/js',
            requires: thirdPatyVendorsToBundleSeperately,
            externals: [],
            transforms: [],
            sourcemaps: false,
            watch: false
        }]
    },

    lint: {
        sourceFiles: sourcePath + '/app/**/*.js'
    },

    images: {
        sourceFiles: sourcePath + '/images/**/*',
        destinationPath: destinationPath + '/images'
    },

    assets: {
        sourceFiles: sourcePath + '/assets/**/*',
        destinationPath: destinationPath
    },

    index: {
        sourceFile: sourcePath + '/index.html',
        destinationPath: destinationPath
    }
};