'use strict';

require('angular');
require('angular-route');

module.exports = angular
    .module('app.core', [
        'ngRoute',

        require('../blocks/router/router.module').name
    ])
    .config(require('./config.route.js'));