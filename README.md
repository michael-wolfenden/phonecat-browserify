# phonecat-browserify #

A boilerplate using angular, gulp and browserify.

## Installation ##

Clone the repository on your computer and change into the projects folder. Run:

```
$ npm install
```

## Running Gulp.js ##

Three tasks are available:

```
$ gulp test
$ gulp development
$ gulp production
```
- Running `gulp test` will execute all `*.specs.js` specifications using `karma` and start a watch task.
- Running `gulp development` or `gulp` will start a development server, build assets and start a watch task.
- Running `gulp production` will execute all `*.specs.js` specifications using `karma` and then prepare all assets for production