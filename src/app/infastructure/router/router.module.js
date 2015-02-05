'use strict';

require('angular');
require('angular-route');

module.exports = angular
    .module('blocks.router', [
        'ngRoute'
    ])
    .provider('routehelperConfig', require('./routehelperConfig'))
    .factory('routehelper', require('./routehelper'));