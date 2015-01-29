'use strict';

require('angular');

module.exports = angular
    .module('blocks.router', [])
    .provider('routehelperConfig', require('./routehelperConfig'))
    .factory('routehelper', require('./routehelper'));